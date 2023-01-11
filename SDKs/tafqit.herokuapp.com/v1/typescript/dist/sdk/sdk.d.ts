import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://tafqit.herokuapp.com/"];
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
     * convert - Convert the number into its Arabic text representation
     * حول العدد إلى ما يقابله كتابة
    **/
    convert(req: operations.ConvertRequest, config?: AxiosRequestConfig): Promise<operations.ConvertResponse>;
}
