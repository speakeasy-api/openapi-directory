import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://rest.nexmo.com/sms"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * sendAnSms - Send an SMS
     *
     * Send an outbound SMS from your Vonage account
    **/
    sendAnSms(req: operations.SendAnSmsRequest, config?: AxiosRequestConfig): Promise<operations.SendAnSmsResponse>;
}
