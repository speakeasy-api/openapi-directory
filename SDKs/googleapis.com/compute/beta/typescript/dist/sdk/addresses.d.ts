import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Addresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves an aggregated list of addresses.
     */
    computeAddressesAggregatedList(req: operations.ComputeAddressesAggregatedListRequest, security: operations.ComputeAddressesAggregatedListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesAggregatedListResponse>;
    /**
     * Deletes the specified address resource.
     */
    computeAddressesDelete(req: operations.ComputeAddressesDeleteRequest, security: operations.ComputeAddressesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesDeleteResponse>;
    /**
     * Returns the specified address resource.
     */
    computeAddressesGet(req: operations.ComputeAddressesGetRequest, security: operations.ComputeAddressesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesGetResponse>;
    /**
     * Creates an address resource in the specified project by using the data included in the request.
     */
    computeAddressesInsert(req: operations.ComputeAddressesInsertRequest, security: operations.ComputeAddressesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesInsertResponse>;
    /**
     * Retrieves a list of addresses contained within the specified region.
     */
    computeAddressesList(req: operations.ComputeAddressesListRequest, security: operations.ComputeAddressesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesListResponse>;
    /**
     * Moves the specified address resource.
     */
    computeAddressesMove(req: operations.ComputeAddressesMoveRequest, security: operations.ComputeAddressesMoveSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesMoveResponse>;
    /**
     * Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.
     */
    computeAddressesSetLabels(req: operations.ComputeAddressesSetLabelsRequest, security: operations.ComputeAddressesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesSetLabelsResponse>;
    /**
     * Returns permissions that a caller has on the specified resource.
     */
    computeAddressesTestIamPermissions(req: operations.ComputeAddressesTestIamPermissionsRequest, security: operations.ComputeAddressesTestIamPermissionsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeAddressesTestIamPermissionsResponse>;
}
