import { AxiosInstance } from "axios";
import { Consent } from "./consent";
import { DataFlow } from "./dataflow";
import { Discovery } from "./discovery";
import { HipFacing } from "./hipfacing";
import { HiuFacing } from "./hiufacing";
import { Identification } from "./identification";
import { Link } from "./link";
import { Monitoring } from "./monitoring";
import { Profile } from "./profile";
import { Subscriptions } from "./subscriptions";
import { UserAuth } from "./userauth";
export declare const ServerList: readonly ["https://dev.ndhm.gov.in/cm"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    consent: Consent;
    dataFlow: DataFlow;
    discovery: Discovery;
    hipFacing: HipFacing;
    hiuFacing: HiuFacing;
    identification: Identification;
    link: Link;
    monitoring: Monitoring;
    profile: Profile;
    subscriptions: Subscriptions;
    userAuth: UserAuth;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
