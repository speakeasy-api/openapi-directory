import { AxiosInstance } from "axios";
import { VeteranConfirmationStatus } from "./veteranconfirmationstatus";
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/veteran_confirmation/{version}", "https://api.va.gov/services/veteran_confirmation/{version}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    veteranConfirmationStatus: VeteranConfirmationStatus;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
