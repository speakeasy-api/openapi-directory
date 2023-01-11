import { AxiosInstance } from "axios";
import { Users } from "./users";
export declare const ServerList: readonly ["https://fitness.googleapis.com/fitness/v1/users"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
