import { Bookshelves } from "./bookshelves";
import { Cloudloading } from "./cloudloading";
import { Dictionary } from "./dictionary";
import { Familysharing } from "./familysharing";
import { Layers } from "./layers";
import { Myconfig } from "./myconfig";
import { Mylibrary } from "./mylibrary";
import { Notification } from "./notification";
import { Onboarding } from "./onboarding";
import { Personalizedstream } from "./personalizedstream";
import { Promooffer } from "./promooffer";
import { Series } from "./series";
import { Volumes } from "./volumes";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://books.googleapis.com/"];
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
 * The Google Books API allows clients to access the Google Books repository.
 *
 * @see {@link https://code.google.com/apis/books/docs/v1/getting_started.html}
 */
export declare class SDK {
    bookshelves: Bookshelves;
    cloudloading: Cloudloading;
    dictionary: Dictionary;
    familysharing: Familysharing;
    layers: Layers;
    myconfig: Myconfig;
    mylibrary: Mylibrary;
    notification: Notification;
    onboarding: Onboarding;
    personalizedstream: Personalizedstream;
    promooffer: Promooffer;
    series: Series;
    volumes: Volumes;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
