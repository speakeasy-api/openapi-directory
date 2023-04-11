import { Detections } from "./detections";
import { Languages } from "./languages";
import { Translations } from "./translations";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://translation.googleapis.com/language/translate"];
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
 * The Google Cloud Translation API lets websites and programs integrate with
 *
 * @remarks
 *     Google Translate programmatically.
 *
 * @see {@link https://code.google.com/apis/language/translate/v2/getting_started.html}
 */
export declare class SDK {
    detections: Detections;
    languages: Languages;
    translations: Translations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
