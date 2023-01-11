import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Action } from "./action";
export declare const ServerList: readonly ["https://catalogue.data.gov.bc.ca/api/3", "https://cat.data.gov.bc.ca/api/3", "https://cad.data.gov.bc.ca/api/3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    action: Action;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
