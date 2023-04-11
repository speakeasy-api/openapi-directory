import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Applications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new device tier config for an app.
     */
    androidpublisherApplicationsDeviceTierConfigsCreate(req: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateRequest, security: operations.AndroidpublisherApplicationsDeviceTierConfigsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherApplicationsDeviceTierConfigsCreateResponse>;
    /**
     * Returns a particular device tier config.
     */
    androidpublisherApplicationsDeviceTierConfigsGet(req: operations.AndroidpublisherApplicationsDeviceTierConfigsGetRequest, security: operations.AndroidpublisherApplicationsDeviceTierConfigsGetSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherApplicationsDeviceTierConfigsGetResponse>;
    /**
     * Returns created device tier configs, ordered by descending creation time.
     */
    androidpublisherApplicationsDeviceTierConfigsList(req: operations.AndroidpublisherApplicationsDeviceTierConfigsListRequest, security: operations.AndroidpublisherApplicationsDeviceTierConfigsListSecurity, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherApplicationsDeviceTierConfigsListResponse>;
}
