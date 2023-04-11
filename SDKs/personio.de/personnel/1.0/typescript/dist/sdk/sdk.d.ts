import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.personio.de/v1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * API for reading and writing personnel data incl. data about attendances and absences
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * This endpoint is responsible for deleting attendance data for the company employees.
     */
    deleteCompanyAttendancesId(req: operations.DeleteCompanyAttendancesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCompanyAttendancesIdResponse>;
    /**
     * This endpoint is responsible for deleting absence period data for the company employees.
     */
    deleteCompanyTimeOffsId(req: operations.DeleteCompanyTimeOffsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCompanyTimeOffsIdResponse>;
    /**
     * This endpoint is responsible for fetching attendance data for the company employees. It is possible to paginate results, filter by period, the date and/or time it was updated, and/or specific employees. The result will contain a list of attendance periods, structured as defined here.
     */
    getCompanyAttendances(req: operations.GetCompanyAttendancesRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyAttendancesResponse>;
    /**
     * List Employees
     */
    getCompanyEmployees(config?: AxiosRequestConfig): Promise<operations.GetCompanyEmployeesResponse>;
    /**
     * Show employee by ID
     */
    getCompanyEmployeesEmployeeId(req: operations.GetCompanyEmployeesEmployeeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyEmployeesEmployeeIdResponse>;
    /**
     * Show employee profile picture
     */
    getCompanyEmployeesEmployeeIdProfilePictureWidth(req: operations.GetCompanyEmployeesEmployeeIdProfilePictureWidthRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyEmployeesEmployeeIdProfilePictureWidthResponse>;
    /**
     * Provides a list of available time-off types, for example 'Paid vacation', 'Parental leave' or 'Home office'
     */
    getCompanyTimeOffTypes(req: operations.GetCompanyTimeOffTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyTimeOffTypesResponse>;
    /**
     * This endpoint is responsible for fetching absence data for the company employees. It is possible to paginate results, filter by period and/or specific employees. The result will contain a list of absence periods, structured as defined here.
     */
    getCompanyTimeOffs(req: operations.GetCompanyTimeOffsRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyTimeOffsResponse>;
    /**
     * Absence Period
     */
    getCompanyTimeOffsId(req: operations.GetCompanyTimeOffsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetCompanyTimeOffsIdResponse>;
    /**
     * This endpoint is responsible for updating attendance data for the company employees. Attributes are not required and if not specified, the current value will be used. It is not possible to change the employee id.
     */
    patchCompanyAttendancesId(req: operations.PatchCompanyAttendancesIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchCompanyAttendancesIdResponse>;
    /**
     * This endpoint is responsible for adding attendance data for the company employees. It is possible to add attendances for one or many employees at the same time. The payload sent on the request should be a list of attendance periods, in the form of an array containing attendance period objects.
     */
    postCompanyAttendances(req: shared.NewAttendancePeriodRequest, config?: AxiosRequestConfig): Promise<operations.PostCompanyAttendancesResponse>;
    /**
     * Create an employee
     *
     * @remarks
     * Creates new employee. Status of the employee will be set to `active` if `hire_date` provided is in past. Otherwise status will be set to `onboarding`. This endpoint will respond with `id` of created employee in case of success.
     *
     */
    postCompanyEmployees(req: operations.PostCompanyEmployeesRequestBody, config?: AxiosRequestConfig): Promise<operations.PostCompanyEmployeesResponse>;
    /**
     * This endpoint is responsible for adding absence data for the company employees.
     */
    postCompanyTimeOffs(req: shared.CreateTimeOffPeriodRequest, config?: AxiosRequestConfig): Promise<operations.PostCompanyTimeOffsResponse>;
}
