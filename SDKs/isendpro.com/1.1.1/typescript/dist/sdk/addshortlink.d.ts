import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AddShortlink {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * add a shortlink
     *
     * @remarks
     * add a shortlink
     */
    addShortlink(req: shared.ShortlinkRequest, config?: AxiosRequestConfig): Promise<operations.AddShortlinkResponse>;
}
