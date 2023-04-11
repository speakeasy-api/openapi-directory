import * as shared from "./models/shared";
import { SMSConversion } from "./smsconversion";
import { VoiceConversion } from "./voiceconversion";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nexmo.com/conversions"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
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
 * The Conversion API allows you to tell Nexmo about the reliability of your 2FA communications. Sending conversion data back to us means that Nexmo can deliver messages faster and more reliably.
 *
 * @remarks
 * The conversion data you send us is confidential: Nexmo does not share it with third parties.
 * In order to identify the carriers who provide the best performance, Nexmo continually tests the routes we use to deliver SMS and voice calls. Using Adaptive Routing™, Nexmo actively reroutes messages through different carrier routes and ensures faster and more reliable delivery for your messages. The route choice is made using millions of real-time conversion data points.
 *
 * @see {@link https://developer.nexmo.com/api/conversion}
 */
export declare class SDK {
    /**
     * SMS Conversion Request
     */
    smsConversion: SMSConversion;
    /**
     * Voice Conversion Request
     */
    voiceConversion: VoiceConversion;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
