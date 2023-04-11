import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EmergencyContacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add/update emergency contacts
     *
     * @remarks
     * Sends new or updated employee emergency contacts directly to Web Pay.
     */
    addOrUpdateEmergencyContacts(req: operations.AddOrUpdateEmergencyContactsRequest, security: operations.AddOrUpdateEmergencyContactsSecurity, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateEmergencyContactsResponse>;
}
