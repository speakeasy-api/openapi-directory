import { AxiosInstance } from "axios";
import { Account } from "./account";
import { Application } from "./application";
import { FacebookMessenger } from "./facebookmessenger";
import { ViberServiceMessage } from "./viberservicemessage";
import { WhatsApp } from "./whatsapp";
export declare const ServerList: readonly ["https://api.nexmo.com/beta/chatapp-accounts"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    account: Account;
    application: Application;
    facebookMessenger: FacebookMessenger;
    viberServiceMessage: ViberServiceMessage;
    whatsApp: WhatsApp;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
