import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * License Template operations
 *
 * @see {@link https://netlicensing.io/wiki/license-template-services} - License Template Services
 */
export declare class LicenseTemplate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create License Template
     *
     * @remarks
     * Creates a new License Template
     */
    createLicenseTemplate(req: operations.CreateLicenseTemplateRequestBody, security: operations.CreateLicenseTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.CreateLicenseTemplateResponse>;
    /**
     * Delete License Template
     *
     * @remarks
     * Delete a License Template by 'number'.
     */
    deleteLicenseTemplate(req: operations.DeleteLicenseTemplateRequest, security: operations.DeleteLicenseTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseTemplateResponse>;
    /**
     * Get License Template
     *
     * @remarks
     * Return a License Template by 'licenseTemplateNumber'
     */
    getLicenseTemplate(req: operations.GetLicenseTemplateRequest, security: operations.GetLicenseTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.GetLicenseTemplateResponse>;
    /**
     * List License Templates
     *
     * @remarks
     * Return a list of all License Templates for the current Vendor
     */
    listLicenseTemplates(config?: AxiosRequestConfig): Promise<operations.ListLicenseTemplatesResponse>;
    /**
     * Update License Template
     *
     * @remarks
     * Sets the provided properties to a License Template. Return an updated License Template
     */
    updateLicenseTemplate(req: operations.UpdateLicenseTemplateRequest, security: operations.UpdateLicenseTemplateSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseTemplateResponse>;
}
