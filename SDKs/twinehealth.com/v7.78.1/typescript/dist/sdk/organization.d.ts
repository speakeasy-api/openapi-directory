import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An organization is a Fitbit Plus customer. No data is accessible across organizations.
 */
export declare class Organization {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get an organization
     *
     * @remarks
     * Get an organization record by id.
     */
    fetchOrganization(req: operations.FetchOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.FetchOrganizationResponse>;
}
