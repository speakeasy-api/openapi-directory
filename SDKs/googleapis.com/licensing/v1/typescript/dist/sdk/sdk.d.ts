import { AxiosInstance } from "axios";
import { LicenseAssignments } from "./licenseassignments";
export declare const ServerList: readonly ["https://licensing.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    licenseAssignments: LicenseAssignments;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
