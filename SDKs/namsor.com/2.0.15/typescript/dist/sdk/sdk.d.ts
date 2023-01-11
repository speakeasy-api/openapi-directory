import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Admin } from "./admin";
import { Chinese } from "./chinese";
import { General } from "./general";
import { Japanese } from "./japanese";
import { Personal } from "./personal";
import { Social } from "./social";
export declare const ServerList: readonly ["https://v2.namsor.com/NamSorAPIv2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    admin: Admin;
    chinese: Chinese;
    general: General;
    japanese: Japanese;
    personal: Personal;
    social: Social;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
