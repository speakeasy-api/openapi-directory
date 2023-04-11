import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * custom package types
 *
 * @remarks
 *
 */
export declare class PackageTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Custom Package Type
     *
     * @remarks
     * Create a custom package type to better assist in getting accurate rate estimates
     */
    createPackageType(req: shared.CreatePackageTypeRequestBody, config?: AxiosRequestConfig): Promise<operations.CreatePackageTypeResponse>;
    /**
     * Delete A Custom Package By ID
     *
     * @remarks
     * Delete a custom package using the ID
     */
    deletePackageType(req: operations.DeletePackageTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePackageTypeResponse>;
    /**
     * Get Custom Package Type By ID
     *
     * @remarks
     * Get Custom Package Type by ID
     */
    getPackageTypeById(req: operations.GetPackageTypeByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPackageTypeByIdResponse>;
    /**
     * List Custom Package Types
     *
     * @remarks
     * List the custom package types associated with the account
     */
    listPackageTypes(config?: AxiosRequestConfig): Promise<operations.ListPackageTypesResponse>;
    /**
     * Update Custom Package Type By ID
     *
     * @remarks
     * Update the custom package type object by ID
     */
    updatePackageType(req: operations.UpdatePackageTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePackageTypeResponse>;
}
