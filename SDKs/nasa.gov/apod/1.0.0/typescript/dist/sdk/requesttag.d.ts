import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An example tag
 *
 * @see {@link https://example.com} - Here's a link
 */
export declare class RequestTag {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns images
     *
     * @remarks
     * Returns the picture of the day
     */
    getApod(req: operations.GetApodRequest, security: operations.GetApodSecurity, config?: AxiosRequestConfig): Promise<operations.GetApodResponse>;
}
