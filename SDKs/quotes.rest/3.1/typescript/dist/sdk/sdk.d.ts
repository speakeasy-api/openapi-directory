import { AxiosInstance } from "axios";
import { PrivateQuotes } from "./privatequotes";
import { Qshow } from "./qshow";
import { Quote } from "./quote";
import { QuoteImages } from "./quoteimages";
import { QuoteOfTheDay } from "./quoteoftheday";
export declare const ServerList: readonly ["https://quotes.rest", "http://quotes.rest", "http://api01.quotes.rest"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    privateQuotes: PrivateQuotes;
    qshow: Qshow;
    quote: Quote;
    quoteImages: QuoteImages;
    quoteOfTheDay: QuoteOfTheDay;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
