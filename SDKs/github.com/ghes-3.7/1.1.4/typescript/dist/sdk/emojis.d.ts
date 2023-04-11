import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * List emojis available to use on GitHub.
 */
export declare class Emojis {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get emojis
     *
     * @remarks
     * Lists all the emojis available to use on GitHub Enterprise Server.
     *
     * @see {@link https://docs.github.com/enterprise-server@3.7/rest/reference/emojis#get-emojis} - API method documentation
     */
    emojisGet(config?: AxiosRequestConfig): Promise<operations.EmojisGetResponse>;
}
