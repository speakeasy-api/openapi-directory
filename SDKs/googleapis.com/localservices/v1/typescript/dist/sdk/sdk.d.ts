import { AxiosInstance } from "axios";
import { AccountReports } from "./accountreports";
import { DetailedLeadReports } from "./detailedleadreports";
export declare const ServerList: readonly ["https://localservices.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accountReports: AccountReports;
    detailedLeadReports: DetailedLeadReports;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
