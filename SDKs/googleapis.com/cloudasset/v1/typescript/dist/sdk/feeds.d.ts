import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Feeds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a feed in a parent project/folder/organization to listen to its asset updates.
     */
    cloudassetFeedsCreate(req: operations.CloudassetFeedsCreateRequest, security: operations.CloudassetFeedsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetFeedsCreateResponse>;
    /**
     * Lists all asset feeds in a parent project/folder/organization.
     */
    cloudassetFeedsList(req: operations.CloudassetFeedsListRequest, security: operations.CloudassetFeedsListSecurity, config?: AxiosRequestConfig): Promise<operations.CloudassetFeedsListResponse>;
}
