import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Analytics } from "./analytics";
import { Balance } from "./balance";
import { Contacts } from "./contacts";
import { Hooks } from "./hooks";
import { Lookup } from "./lookup";
import { Pricing } from "./pricing";
import { Sms } from "./sms";
import { Status } from "./status";
import { ValidateForVoice } from "./validateforvoice";
import { Voice } from "./voice";
export declare const ServerList: readonly ["https://gateway.sms77.io/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    analytics: Analytics;
    balance: Balance;
    contacts: Contacts;
    hooks: Hooks;
    lookup: Lookup;
    pricing: Pricing;
    sms: Sms;
    status: Status;
    validateForVoice: ValidateForVoice;
    voice: Voice;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
