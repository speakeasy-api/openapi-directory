import { AxiosInstance } from "axios";
import { Assetlinks } from "./assetlinks";
import { Statements } from "./statements";
export declare const ServerList: readonly ["https://digitalassetlinks.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    assetlinks: Assetlinks;
    statements: Statements;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
