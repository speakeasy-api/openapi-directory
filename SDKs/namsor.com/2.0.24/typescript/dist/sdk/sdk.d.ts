import { Admin } from "./admin";
import { Chinese } from "./chinese";
import { General } from "./general";
import { Indian } from "./indian";
import { Japanese } from "./japanese";
import * as shared from "./models/shared";
import { Personal } from "./personal";
import { Social } from "./social";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://v2.namsor.com/NamSorAPIv2"];
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
 * NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. By default, enpoints use 1 unit per name (ex. Gender), but Ethnicity classification uses 10 to 20 units per name depending on taxonomy. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it!
 *
 * @see {@link https://github.com/namsor} - NamSor API client SDKs v2 for Java, Python
 */
export declare class SDK {
    /**
     * Administrative, system management.
     */
    admin: Admin;
    /**
     * CHINESE special features
     */
    chinese: Chinese;
    general: General;
    /**
     * INDIAN special features
     */
    indian: Indian;
    /**
     * JAPANESE special features
     */
    japanese: Japanese;
    /**
     * Personal names (anthroponyms) : gender, country origin/ethnicity, diaspora, US 'race'/ethniciy
     */
    personal: Personal;
    /**
     * Social media and pseudonyms
     */
    social: Social;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
