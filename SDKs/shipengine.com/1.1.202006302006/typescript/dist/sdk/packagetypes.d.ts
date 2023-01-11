import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PackageTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createPackageType - Create Custom Package Type
     *
     * Create a custom package type to better assist in getting accurate rate estimates
    **/
    createPackageType(req: operations.CreatePackageTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreatePackageTypeResponse>;
    /**
     * deletePackageType - Delete A Custom Package By ID
     *
     * Delete a custom package using the ID
    **/
    deletePackageType(req: operations.DeletePackageTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeletePackageTypeResponse>;
    /**
     * getPackageTypeById - Get Custom Package Type By ID
     *
     * Get Custom Package Type by ID
    **/
    getPackageTypeById(req: operations.GetPackageTypeByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetPackageTypeByIdResponse>;
    /**
     * listPackageTypes - List Custom Package Types
     *
     * List the custom package types associated with the account
    **/
    listPackageTypes(config?: AxiosRequestConfig): Promise<operations.ListPackageTypesResponse>;
    /**
     * updatePackageType - Update Custom Package Type By ID
     *
     * Update the custom package type object by ID
    **/
    updatePackageType(req: operations.UpdatePackageTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePackageTypeResponse>;
}
