import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Licensee operations
 *
 * @see {@link https://netlicensing.io/wiki/licensee-services} - Licensee Services
 */
export declare class Licensee {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Licensee
     *
     * @remarks
     * Creates a new Licensee
     */
    createLicensee(req: operations.CreateLicenseeRequestBody, security: operations.CreateLicenseeSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLicenseeResponse>;
    /**
     * Delete Licensee
     *
     * @remarks
     * Delete a Licensee by 'number'
     */
    deleteLicensee(req: operations.DeleteLicenseeRequest, security: operations.DeleteLicenseeSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseeResponse>;
    /**
     * Get Licensee
     *
     * @remarks
     * Return a Licensee by 'licenseeNumber'
     */
    getLicensee(req: operations.GetLicenseeRequest, security: operations.GetLicenseeSecurity, config?: AxiosRequestConfig): Promise<operations.GetLicenseeResponse>;
    /**
     * List Licensees
     *
     * @remarks
     * Return a list of all Licensees for the current Vendor
     */
    listLicensees(config?: AxiosRequestConfig): Promise<operations.ListLicenseesResponse>;
    /**
     * Transfer Licenses
     *
     * @remarks
     * Licenses transfer between Licensees
     */
    transferLicenses(req: operations.TransferLicensesRequest, security: operations.TransferLicensesSecurity, config?: AxiosRequestConfig): Promise<operations.TransferLicensesResponse>;
    /**
     * Update Licensee
     *
     * @remarks
     * Sets the provided properties to a Licensee. Return an updated Licensee
     */
    updateLicensee(req: operations.UpdateLicenseeRequest, security: operations.UpdateLicenseeSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseeResponse>;
    /**
     * Validate Licensee
     *
     * @remarks
     * Validates active Licenses of the Licensee
     */
    validateLicensee(req: operations.ValidateLicenseeRequest, security: operations.ValidateLicenseeSecurity, config?: AxiosRequestConfig): Promise<operations.ValidateLicenseeResponse>;
}
