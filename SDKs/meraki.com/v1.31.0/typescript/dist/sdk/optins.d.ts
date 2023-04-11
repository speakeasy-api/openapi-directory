import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class OptIns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new early access feature opt-in for an organization
     *
     * @remarks
     * Create a new early access feature opt-in for an organization
     */
    createOrganizationEarlyAccessFeaturesOptIn(req: operations.CreateOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * Delete an early access feature opt-in
     *
     * @remarks
     * Delete an early access feature opt-in
     */
    deleteOrganizationEarlyAccessFeaturesOptIn(req: operations.DeleteOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * Show an early access feature opt-in for an organization
     *
     * @remarks
     * Show an early access feature opt-in for an organization
     */
    getOrganizationEarlyAccessFeaturesOptIn(req: operations.GetOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationEarlyAccessFeaturesOptInResponse>;
    /**
     * List the early access feature opt-ins for an organization
     *
     * @remarks
     * List the early access feature opt-ins for an organization
     */
    getOrganizationEarlyAccessFeaturesOptIns(req: operations.GetOrganizationEarlyAccessFeaturesOptInsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationEarlyAccessFeaturesOptInsResponse>;
    /**
     * Update an early access feature opt-in for an organization
     *
     * @remarks
     * Update an early access feature opt-in for an organization
     */
    updateOrganizationEarlyAccessFeaturesOptIn(req: operations.UpdateOrganizationEarlyAccessFeaturesOptInRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationEarlyAccessFeaturesOptInResponse>;
}
