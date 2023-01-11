import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { ApiInformation } from "./apiinformation";
export declare const ServerList: readonly ["https://positioning.hereapi.com/v2", "https://az.positioning.hereapi.com/v2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    apiInformation: ApiInformation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
