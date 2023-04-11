import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for managing websites.
 */
export declare class Websites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get snippet for a website
     *
     * @remarks
     * Endpoint used to get a snippet for a website.
     */
    getTrackingSnippet(req: operations.GetTrackingSnippetRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackingSnippetResponse>;
}
