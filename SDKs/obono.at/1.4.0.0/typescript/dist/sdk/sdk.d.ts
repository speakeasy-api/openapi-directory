import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Auth } from "./auth";
import { Beleg } from "./beleg";
import { Export } from "./export";
import { Monatsbelege } from "./monatsbelege";
import { Registrierkasse } from "./registrierkasse";
export declare const ServerList: readonly ["https://obono.at/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    auth: Auth;
    beleg: Beleg;
    export: Export;
    monatsbelege: Monatsbelege;
    registrierkasse: Registrierkasse;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
