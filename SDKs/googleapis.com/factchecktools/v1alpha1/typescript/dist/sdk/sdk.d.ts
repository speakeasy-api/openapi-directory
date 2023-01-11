import { AxiosInstance } from "axios";
import { Claims } from "./claims";
import { Pages } from "./pages";
export declare const ServerList: readonly ["https://factchecktools.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    claims: Claims;
    pages: Pages;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
