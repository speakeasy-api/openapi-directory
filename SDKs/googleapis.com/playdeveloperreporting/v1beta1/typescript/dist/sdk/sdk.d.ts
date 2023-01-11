import { AxiosInstance } from "axios";
import { Anomalies } from "./anomalies";
import { Vitals } from "./vitals";
export declare const ServerList: readonly ["https://playdeveloperreporting.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    anomalies: Anomalies;
    vitals: Vitals;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
