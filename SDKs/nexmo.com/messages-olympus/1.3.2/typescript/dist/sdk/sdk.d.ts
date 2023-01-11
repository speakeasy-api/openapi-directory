import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.nexmo.com/v1/messages"];
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
     * sendMessage - Send a message to the given channel.
     *
     * Send a Message
    **/
    sendMessage(req: operations.SendMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendMessageResponse>;
}
