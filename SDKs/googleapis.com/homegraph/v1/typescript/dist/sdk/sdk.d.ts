import { AxiosInstance } from "axios";
import { AgentUsers } from "./agentusers";
import { Devices } from "./devices";
export declare const ServerList: readonly ["https://homegraph.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    agentUsers: AgentUsers;
    devices: Devices;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
