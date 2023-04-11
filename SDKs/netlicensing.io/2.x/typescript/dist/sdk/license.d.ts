import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * License operations
 *
 * @see {@link https://netlicensing.io/wiki/license-services} - License Services
 */
export declare class License {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create License
     *
     * @remarks
     * Creates a new License
     */
    createLicense(req: operations.CreateLicenseRequestBody, security: operations.CreateLicenseSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLicenseResponse>;
    /**
     * Delete License
     *
     * @remarks
     * Delete License by a 'licenseNumber'
     */
    deleteLicense(req: operations.DeleteLicenseRequest, security: operations.DeleteLicenseSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseResponse>;
    /**
     * Get License
     *
     * @remarks
     * Get License by a 'licenseNumber'
     */
    getLicense(req: operations.GetLicenseRequest, security: operations.GetLicenseSecurity, config?: AxiosRequestConfig): Promise<operations.GetLicenseResponse>;
    /**
     * List Licenses
     *
     * @remarks
     * Return a list of all Licenses for the current Vendor
     */
    listLicenses(config?: AxiosRequestConfig): Promise<operations.ListLicensesResponse>;
    /**
     * Update License
     *
     * @remarks
     * Update License by a 'licenseNumber'
     */
    updateLicense(req: operations.UpdateLicenseRequest, security: operations.UpdateLicenseSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseResponse>;
}
