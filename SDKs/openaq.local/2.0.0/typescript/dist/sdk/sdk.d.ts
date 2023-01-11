import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { V1 } from "./v1";
import { V2 } from "./v2";
export declare const ServerList: readonly ["http://openaq.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    v1: V1;
    v2: V2;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * favicoFaviconIcoGet - Favico
    **/
    favicoFaviconIcoGet(config?: AxiosRequestConfig): Promise<operations.FavicoFaviconIcoGetResponse>;
    /**
     * pongPingGet - Pong
     *
     * Sanity check.
     * This will let the user know that the service is operational.
     * And this path operation will:
     * * show a lifesign
    **/
    pongPingGet(config?: AxiosRequestConfig): Promise<operations.PongPingGetResponse>;
}
