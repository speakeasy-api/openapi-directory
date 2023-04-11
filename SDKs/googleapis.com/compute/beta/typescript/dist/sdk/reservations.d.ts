import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reservations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of reservations.
     */
    computeReservationsAggregatedList(req: operations.ComputeReservationsAggregatedListRequest, security: operations.ComputeReservationsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsAggregatedListResponse>;
    /**
     * Deletes the specified reservation.
     */
    computeReservationsDelete(req: operations.ComputeReservationsDeleteRequest, security: operations.ComputeReservationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsDeleteResponse>;
    /**
     * Retrieves information about the specified reservation.
     */
    computeReservationsGet(req: operations.ComputeReservationsGetRequest, security: operations.ComputeReservationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsGetResponse>;
    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    computeReservationsGetIamPolicy(req: operations.ComputeReservationsGetIamPolicyRequest, security: operations.ComputeReservationsGetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsGetIamPolicyResponse>;
    /**
     * Creates a new reservation. For more information, read Reserving zonal resources.
     */
    computeReservationsInsert(req: operations.ComputeReservationsInsertRequest, security: operations.ComputeReservationsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsInsertResponse>;
    /**
     * A list of all the reservations that have been configured for the specified project in specified zone.
     */
    computeReservationsList(req: operations.ComputeReservationsListRequest, security: operations.ComputeReservationsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsListResponse>;
    /**
     * Resizes the reservation (applicable to standalone reservations only). For more information, read Modifying reservations.
     */
    computeReservationsResize(req: operations.ComputeReservationsResizeRequest, security: operations.ComputeReservationsResizeSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsResizeResponse>;
    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    computeReservationsSetIamPolicy(req: operations.ComputeReservationsSetIamPolicyRequest, security: operations.ComputeReservationsSetIamPolicySecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsSetIamPolicyResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeReservationsTestIamPermissions(req: operations.ComputeReservationsTestIamPermissionsRequest, security: operations.ComputeReservationsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsTestIamPermissionsResponse>;
    /**
     * Update share settings of the reservation.
     */
    computeReservationsUpdate(req: operations.ComputeReservationsUpdateRequest, security: operations.ComputeReservationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeReservationsUpdateResponse>;
}
