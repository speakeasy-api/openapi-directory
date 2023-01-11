import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Circuits } from "./circuits";
import { Dcim } from "./dcim";
import { Extras } from "./extras";
import { Ipam } from "./ipam";
import { Secrets } from "./secrets";
import { Tenancy } from "./tenancy";
import { Virtualization } from "./virtualization";
export declare const ServerList: readonly ["http://netboxdemo.com/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    circuits: Circuits;
    dcim: Dcim;
    extras: Extras;
    ipam: Ipam;
    secrets: Secrets;
    tenancy: Tenancy;
    virtualization: Virtualization;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
