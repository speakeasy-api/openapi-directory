import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Labor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CreateBreakType
     *
     * @remarks
     * Creates a new `BreakType`.
     *
     * A `BreakType` is a template for creating `Break` objects.
     * You must provide the following values in your request to this
     * endpoint:
     *
     * - `location_id`
     * - `break_name`
     * - `expected_duration`
     * - `is_paid`
     *
     * You can only have three `BreakType` instances per location. If you attempt to add a fourth
     * `BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
     * is returned.
     */
    createBreakType(req: shared.CreateBreakTypeRequest, security: operations.CreateBreakTypeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateBreakTypeResponse>;
    /**
     * CreateShift
     *
     * @remarks
     * Creates a new `Shift`.
     *
     * A `Shift` represents a complete workday for a single employee.
     * You must provide the following values in your request to this
     * endpoint:
     *
     * - `location_id`
     * - `employee_id`
     * - `start_at`
     *
     * An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
     * - The `status` of the new `Shift` is `OPEN` and the employee has another
     * shift with an `OPEN` status.
     * - The `start_at` date is in the future.
     * - The `start_at` or `end_at` date overlaps another shift for the same employee.
     * - The `Break` instances are set in the request and a break `start_at`
     * is before the `Shift.start_at`, a break `end_at` is after
     * the `Shift.end_at`, or both.
     */
    createShift(req: shared.CreateShiftRequest, security: operations.CreateShiftSecurity, config?: AxiosRequestConfig): Promise<operations.CreateShiftResponse>;
    /**
     * DeleteBreakType
     *
     * @remarks
     * Deletes an existing `BreakType`.
     *
     * A `BreakType` can be deleted even if it is referenced from a `Shift`.
     */
    deleteBreakType(req: operations.DeleteBreakTypeRequest, security: operations.DeleteBreakTypeSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteBreakTypeResponse>;
    /**
     * DeleteShift
     *
     * @remarks
     * Deletes a `Shift`.
     */
    deleteShift(req: operations.DeleteShiftRequest, security: operations.DeleteShiftSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteShiftResponse>;
    /**
     * GetBreakType
     *
     * @remarks
     * Returns a single `BreakType` specified by `id`.
     */
    getBreakType(req: operations.GetBreakTypeRequest, security: operations.GetBreakTypeSecurity, config?: AxiosRequestConfig): Promise<operations.GetBreakTypeResponse>;
    /**
     * GetEmployeeWage
     *
     * @remarks
     * Returns a single `EmployeeWage` specified by `id`.
     */
    getEmployeeWage(req: operations.GetEmployeeWageRequest, security: operations.GetEmployeeWageSecurity, config?: AxiosRequestConfig): Promise<operations.GetEmployeeWageResponse>;
    /**
     * GetShift
     *
     * @remarks
     * Returns a single `Shift` specified by `id`.
     */
    getShift(req: operations.GetShiftRequest, security: operations.GetShiftSecurity, config?: AxiosRequestConfig): Promise<operations.GetShiftResponse>;
    /**
     * GetTeamMemberWage
     *
     * @remarks
     * Returns a single `TeamMemberWage` specified by `id `.
     */
    getTeamMemberWage(req: operations.GetTeamMemberWageRequest, security: operations.GetTeamMemberWageSecurity, config?: AxiosRequestConfig): Promise<operations.GetTeamMemberWageResponse>;
    /**
     * ListBreakTypes
     *
     * @remarks
     * Returns a paginated list of `BreakType` instances for a business.
     */
    listBreakTypes(req: operations.ListBreakTypesRequest, security: operations.ListBreakTypesSecurity, config?: AxiosRequestConfig): Promise<operations.ListBreakTypesResponse>;
    /**
     * ListEmployeeWages
     *
     * @remarks
     * Returns a paginated list of `EmployeeWage` instances for a business.
     */
    listEmployeeWages(req: operations.ListEmployeeWagesRequest, security: operations.ListEmployeeWagesSecurity, config?: AxiosRequestConfig): Promise<operations.ListEmployeeWagesResponse>;
    /**
     * ListTeamMemberWages
     *
     * @remarks
     * Returns a paginated list of `TeamMemberWage` instances for a business.
     */
    listTeamMemberWages(req: operations.ListTeamMemberWagesRequest, security: operations.ListTeamMemberWagesSecurity, config?: AxiosRequestConfig): Promise<operations.ListTeamMemberWagesResponse>;
    /**
     * ListWorkweekConfigs
     *
     * @remarks
     * Returns a list of `WorkweekConfig` instances for a business.
     */
    listWorkweekConfigs(req: operations.ListWorkweekConfigsRequest, security: operations.ListWorkweekConfigsSecurity, config?: AxiosRequestConfig): Promise<operations.ListWorkweekConfigsResponse>;
    /**
     * SearchShifts
     *
     * @remarks
     * Returns a paginated list of `Shift` records for a business.
     * The list to be returned can be filtered by:
     * - Location IDs.
     * - Employee IDs.
     * - Shift status (`OPEN` and `CLOSED`).
     * - Shift start.
     * - Shift end.
     * - Workday details.
     *
     * The list can be sorted by:
     * - `start_at`.
     * - `end_at`.
     * - `created_at`.
     * - `updated_at`.
     */
    searchShifts(req: shared.SearchShiftsRequest, security: operations.SearchShiftsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchShiftsResponse>;
    /**
     * UpdateBreakType
     *
     * @remarks
     * Updates an existing `BreakType`.
     */
    updateBreakType(req: operations.UpdateBreakTypeRequest, security: operations.UpdateBreakTypeSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateBreakTypeResponse>;
    /**
     * UpdateShift
     *
     * @remarks
     * Updates an existing `Shift`.
     *
     * When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
     * the `end_at` property set to a valid RFC-3339 datetime string.
     *
     * When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
     * set on each `Break`.
     */
    updateShift(req: operations.UpdateShiftRequest, security: operations.UpdateShiftSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateShiftResponse>;
    /**
     * UpdateWorkweekConfig
     *
     * @remarks
     * Updates a `WorkweekConfig`.
     */
    updateWorkweekConfig(req: operations.UpdateWorkweekConfigRequest, security: operations.UpdateWorkweekConfigSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateWorkweekConfigResponse>;
}
