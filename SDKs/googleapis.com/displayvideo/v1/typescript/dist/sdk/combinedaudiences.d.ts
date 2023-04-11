import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CombinedAudiences {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a combined audience.
     */
    displayvideoCombinedAudiencesGet(req: operations.DisplayvideoCombinedAudiencesGetRequest, security: operations.DisplayvideoCombinedAudiencesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCombinedAudiencesGetResponse>;
    /**
     * Lists combined audiences. The order is defined by the order_by parameter.
     */
    displayvideoCombinedAudiencesList(req: operations.DisplayvideoCombinedAudiencesListRequest, security: operations.DisplayvideoCombinedAudiencesListSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoCombinedAudiencesListResponse>;
}
