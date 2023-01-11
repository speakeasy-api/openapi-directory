import { AxiosInstance } from "axios";
import { Edit } from "./edit";
import { Serve } from "./serve";
export declare const ServerList: readonly ["https://api.shotstack.io/{version}", "https://api.shotstack.io/serve/{version}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    edit: Edit;
    serve: Serve;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
