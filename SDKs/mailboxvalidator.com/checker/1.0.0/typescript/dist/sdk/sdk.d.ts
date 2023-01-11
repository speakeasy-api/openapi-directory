import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.mailboxvalidator.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getV1EmailFree - The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.
    **/
    getV1EmailFree(req: operations.GetV1EmailFreeRequest, config?: AxiosRequestConfig): Promise<operations.GetV1EmailFreeResponse>;
}
