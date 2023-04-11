import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The different subscription types that are defined in a portal.
 */
export declare class Definition {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get subscription definitions
     *
     * @remarks
     * Get a list of all subscription definitions for the portal
     */
    getCommunicationPreferencesV3DefinitionsGetPage(config?: AxiosRequestConfig): Promise<operations.GetCommunicationPreferencesV3DefinitionsGetPageResponse>;
}
