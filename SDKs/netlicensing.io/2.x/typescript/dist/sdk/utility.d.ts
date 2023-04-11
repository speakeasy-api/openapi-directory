import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Utility operations
 *
 * @see {@link https://netlicensing.io/wiki/utility-services} - Utility Services
 */
export declare class Utility {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List License Types
     *
     * @remarks
     * Return a list of all License Types supported by the service
     */
    licenseTypes(config?: AxiosRequestConfig): Promise<operations.LicenseTypesResponse>;
    /**
     * List Licensing Models
     *
     * @remarks
     * Return a list of all licensing models supported by the service
     */
    licensingModels(config?: AxiosRequestConfig): Promise<operations.LicensingModelsResponse>;
}
