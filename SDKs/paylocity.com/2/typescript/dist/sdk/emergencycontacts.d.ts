import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmergencyContacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addOrUpdateEmergencyContacts - Add/update emergency contacts
     *
     * Sends new or updated employee emergency contacts directly to Web Pay.
    **/
    addOrUpdateEmergencyContacts(req: operations.AddOrUpdateEmergencyContactsRequest, config?: AxiosRequestConfig): Promise<operations.AddOrUpdateEmergencyContactsResponse>;
}
