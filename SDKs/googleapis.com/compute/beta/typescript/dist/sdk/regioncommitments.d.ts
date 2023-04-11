import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class RegionCommitments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of commitments by region.
     */
    computeRegionCommitmentsAggregatedList(req: operations.ComputeRegionCommitmentsAggregatedListRequest, security: operations.ComputeRegionCommitmentsAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionCommitmentsAggregatedListResponse>;
    /**
     * Returns the specified commitment resource.
     */
    computeRegionCommitmentsGet(req: operations.ComputeRegionCommitmentsGetRequest, security: operations.ComputeRegionCommitmentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionCommitmentsGetResponse>;
    /**
     * Creates a commitment in the specified project using the data included in the request.
     */
    computeRegionCommitmentsInsert(req: operations.ComputeRegionCommitmentsInsertRequest, security: operations.ComputeRegionCommitmentsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionCommitmentsInsertResponse>;
    /**
     * Retrieves a list of commitments contained within the specified region.
     */
    computeRegionCommitmentsList(req: operations.ComputeRegionCommitmentsListRequest, security: operations.ComputeRegionCommitmentsListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionCommitmentsListResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeRegionCommitmentsTestIamPermissions(req: operations.ComputeRegionCommitmentsTestIamPermissionsRequest, security: operations.ComputeRegionCommitmentsTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionCommitmentsTestIamPermissionsResponse>;
    /**
     * Updates the specified commitment with the data included in the request. Update is performed only on selected fields included as part of update-mask. Only the following fields can be modified: auto_renew.
     */
    computeRegionCommitmentsUpdate(req: operations.ComputeRegionCommitmentsUpdateRequest, security: operations.ComputeRegionCommitmentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionCommitmentsUpdateResponse>;
    /**
     * Transfers GPUs or local SSDs between reservations within commitments.
     */
    computeRegionCommitmentsUpdateReservations(req: operations.ComputeRegionCommitmentsUpdateReservationsRequest, security: operations.ComputeRegionCommitmentsUpdateReservationsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeRegionCommitmentsUpdateReservationsResponse>;
}
