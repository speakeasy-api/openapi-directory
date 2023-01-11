import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { PrivateQuotes } from "./privatequotes";
import { Qshow } from "./qshow";
import { Quote } from "./quote";
import { QuoteImages } from "./quoteimages";
import { QuoteOfTheDay } from "./quoteoftheday";


export const ServerList = [
	"https://quotes.rest",
	"http://quotes.rest",
	"http://api01.quotes.rest",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public privateQuotes: PrivateQuotes;
  public qshow: Qshow;
  public quote: Quote;
  public quoteImages: QuoteImages;
  public quoteOfTheDay: QuoteOfTheDay;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.privateQuotes = new PrivateQuotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.qshow = new Qshow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quote = new Quote(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quoteImages = new QuoteImages(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quoteOfTheDay = new QuoteOfTheDay(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}