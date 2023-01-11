import { AxiosInstance } from "axios";
import { Labels } from "./labels";
import { Limits } from "./limits";
import { Users } from "./users";
export declare const ServerList: readonly ["https://drivelabels.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    labels: Labels;
    limits: Limits;
    users: Users;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
