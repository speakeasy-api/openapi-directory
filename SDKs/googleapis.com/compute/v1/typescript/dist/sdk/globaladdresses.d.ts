import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GlobalAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the specified address resource.
     */
    computeGlobalAddressesDelete(req: operations.ComputeGlobalAddressesDeleteRequest, security: operations.ComputeGlobalAddressesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalAddressesDeleteResponse>;
    /**
     * Returns the specified address resource.
     */
    computeGlobalAddressesGet(req: operations.ComputeGlobalAddressesGetRequest, security: operations.ComputeGlobalAddressesGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalAddressesGetResponse>;
    /**
     * Creates an address resource in the specified project by using the data included in the request.
     */
    computeGlobalAddressesInsert(req: operations.ComputeGlobalAddressesInsertRequest, security: operations.ComputeGlobalAddressesInsertSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalAddressesInsertResponse>;
    /**
     * Retrieves a list of global addresses.
     */
    computeGlobalAddressesList(req: operations.ComputeGlobalAddressesListRequest, security: operations.ComputeGlobalAddressesListSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalAddressesListResponse>;
    /**
     * Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.
     */
    computeGlobalAddressesSetLabels(req: operations.ComputeGlobalAddressesSetLabelsRequest, security: operations.ComputeGlobalAddressesSetLabelsSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeGlobalAddressesSetLabelsResponse>;
}
