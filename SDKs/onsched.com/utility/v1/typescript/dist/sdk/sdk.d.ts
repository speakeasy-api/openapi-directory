import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Health } from "./health";
import { StripePlans } from "./stripeplans";
export declare const ServerList: readonly ["https://onsched.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    health: Health;
    stripePlans: StripePlans;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
