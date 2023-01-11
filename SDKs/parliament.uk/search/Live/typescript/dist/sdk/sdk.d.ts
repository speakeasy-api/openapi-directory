import { AxiosInstance } from "axios";
import { Description } from "./description";
import { Query } from "./query";
export declare const ServerList: readonly ["https://api.parliament.uk/search"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    description: Description;
    query: Query;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
