import { AxiosInstance } from "axios";
import { Callbacks } from "./callbacks";
import { Definitions } from "./definitions";
import { Functions } from "./functions";
import { Revisions } from "./revisions";
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    callbacks: Callbacks;
    definitions: Definitions;
    functions: Functions;
    revisions: Revisions;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
