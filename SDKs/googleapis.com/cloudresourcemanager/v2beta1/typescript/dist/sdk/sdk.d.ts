import { AxiosInstance } from "axios";
import { Folders } from "./folders";
import { Operations } from "./operations";
export declare const ServerList: readonly ["https://cloudresourcemanager.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    folders: Folders;
    operations: Operations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
