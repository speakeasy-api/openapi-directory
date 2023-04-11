import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Watermarks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Allows upload of watermark image and setting it for a channel.
     */
    youtubeWatermarksSet(req: operations.YoutubeWatermarksSetRequest, security: operations.YoutubeWatermarksSetSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeWatermarksSetResponse>;
    /**
     * Allows removal of channel watermark.
     */
    youtubeWatermarksUnset(req: operations.YoutubeWatermarksUnsetRequest, security: operations.YoutubeWatermarksUnsetSecurity, config?: AxiosRequestConfig): Promise<operations.YoutubeWatermarksUnsetResponse>;
}
