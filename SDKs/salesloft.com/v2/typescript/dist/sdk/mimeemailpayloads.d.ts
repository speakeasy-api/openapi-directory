import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * MIME content for email
 */
export declare class MimeEmailPayloads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch the MIME content for email
     *
     * @remarks
     * Fetch the MIME content for email.
     *
     */
    getV2MimeEmailPayloadsIdJson(req: operations.GetV2MimeEmailPayloadsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2MimeEmailPayloadsIdJsonResponse>;
}
