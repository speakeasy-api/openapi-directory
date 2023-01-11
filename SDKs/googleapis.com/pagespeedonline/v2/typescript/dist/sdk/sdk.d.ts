import { AxiosInstance } from "axios";
import { Pagespeedapi } from "./pagespeedapi";
export declare const ServerList: readonly ["https://www.googleapis.com/pagespeedonline/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    pagespeedapi: Pagespeedapi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
