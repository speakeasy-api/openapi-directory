import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stories {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Top Stories
     *
     * @remarks
     * The Top Stories API returns a list of articles and associated images currently on the specified section.  Support JSON and JSONP.
     *
     */
    getSectionFormat(req: operations.GetSectionFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionFormatResponse>;
}
