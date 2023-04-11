import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a single setting by ID.
     */
    mirrorSettingsGet(req: operations.MirrorSettingsGetRequest, security: operations.MirrorSettingsGetSecurity, config?: AxiosRequestConfig): Promise<operations.MirrorSettingsGetResponse>;
}
