import { AxiosInstance } from "axios";
import { Definition } from "./definition";
import { Status } from "./status";
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    definition: Definition;
    status: Status;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
