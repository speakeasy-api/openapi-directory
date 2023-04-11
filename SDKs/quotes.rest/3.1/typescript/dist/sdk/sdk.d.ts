import { PrivateQuotes } from "./privatequotes";
import { Qshow } from "./qshow";
import { Quote } from "./quote";
import { QuoteImages } from "./quoteimages";
import { QuoteOfTheDay } from "./quoteoftheday";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://quotes.rest", "http://quotes.rest", "http://api01.quotes.rest"];
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
 *  They Said So Quotes API offers a complete feature rich REST API access to its quotes platform.  This is the documentation for the world famous [quotes API](https://theysaidso.com/api).  If you are a subscriber and you are trying this from a console add 'X-TheySaidSo-Api-Secret' header and add your api key as the header value. You can test and play with the API right here on this web page. For using the private end points and subscribing to the API please visit https://theysaidso.com/api.
 */
export declare class SDK {
    /**
     * Create and manage your own Quotes. You need an API key to access this service.
     */
    privateQuotes: PrivateQuotes;
    /**
     * Access Qshow - quote collection service. Create curated quotes collection. You can group quotes by any way you want and access them as a single unit. You need an API key to access this service.
     */
    qshow: Qshow;
    /**
     * Access random quote service. Use this to get random quotes , quotes filtered by authors or tags etc. You need an API key to access this service.
     */
    quote: Quote;
    /**
     * Create beatiful quote images or get one of the premade images. You need an API key to access this service.
     *
     * @see {@link https://theysaidso.com/api/quote#image} - Find out more about image
     */
    quoteImages: QuoteImages;
    /**
     * Access quote of the day service. Use this to get the quote of the day in various categories. This is a free API that is available to public. You must credit They Said So if you are using the free version.
     *
     * @see {@link https://theysaidso.com/api/quote#qod} - Find out more
     */
    quoteOfTheDay: QuoteOfTheDay;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
