import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { SmsConversion } from "./smsconversion";
import { VoiceConversion } from "./voiceconversion";
export declare const ServerList: readonly ["https://api.nexmo.com/conversions"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    smsConversion: SmsConversion;
    voiceConversion: VoiceConversion;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
