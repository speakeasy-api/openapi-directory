import { AxiosInstance } from "axios";
import { Data } from "./data";
import { Management } from "./management";
import { Metadata } from "./metadata";
import { Provisioning } from "./provisioning";
import { UserDeletion } from "./userdeletion";
export declare const ServerList: readonly ["https://analytics.googleapis.com/analytics/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    data: Data;
    management: Management;
    metadata: Metadata;
    provisioning: Provisioning;
    userDeletion: UserDeletion;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
