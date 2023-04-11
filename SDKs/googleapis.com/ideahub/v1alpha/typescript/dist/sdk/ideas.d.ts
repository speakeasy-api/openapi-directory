import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Ideas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List ideas for a given Creator and filter and sort options.
     */
    ideahubIdeasList(req: operations.IdeahubIdeasListRequest, config?: AxiosRequestConfig): Promise<operations.IdeahubIdeasListResponse>;
}
