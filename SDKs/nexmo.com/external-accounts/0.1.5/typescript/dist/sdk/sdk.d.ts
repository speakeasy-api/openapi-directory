import { Account } from "./account";
import { Application } from "./application";
import { FacebookMessenger } from "./facebookmessenger";
import { ViberServiceMessage } from "./viberservicemessage";
import { WhatsApp } from "./whatsapp";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/beta/chatapp-accounts"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The External Accounts API is used to manage accounts for Viber Business Messages, Facebook Messenger and Whatsapp for use in the [Messages](https://developer.nexmo.com/messages/overview) and [Dispatch](https://developer.nexmo.com/dispatch/overview) APIs.
 */
export declare class SDK {
    /**
     * An external-account used as the `from` field in the Messages API and Dispatch API
     */
    account: Account;
    /**
     * Inbound messages to an external account which is linked to an application will be delivered to the application's inbound URL.
     */
    application: Application;
    /**
     * Managing your [Facebook Messenger](https://developer.nexmo.com/messages/concepts/facebook) account
     */
    facebookMessenger: FacebookMessenger;
    /**
     * Managing your [Viber Service Message](https://developer.nexmo.com/messages/concepts/viber) account
     */
    viberServiceMessage: ViberServiceMessage;
    whatsApp: WhatsApp;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
