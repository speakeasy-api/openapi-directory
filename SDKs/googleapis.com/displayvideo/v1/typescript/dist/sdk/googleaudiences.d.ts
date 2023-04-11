import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GoogleAudiences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a Google audience.
     */
    displayvideoGoogleAudiencesGet(req: operations.DisplayvideoGoogleAudiencesGetRequest, security: operations.DisplayvideoGoogleAudiencesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGoogleAudiencesGetResponse>;
    /**
     * Lists Google audiences. The order is defined by the order_by parameter.
     */
    displayvideoGoogleAudiencesList(req: operations.DisplayvideoGoogleAudiencesListRequest, security: operations.DisplayvideoGoogleAudiencesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoGoogleAudiencesListResponse>;
}
