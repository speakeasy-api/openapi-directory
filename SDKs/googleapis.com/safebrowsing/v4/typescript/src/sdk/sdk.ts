import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { EncodedFullHashes } from "./encodedfullhashes";
import { EncodedUpdates } from "./encodedupdates";
import { FullHashes } from "./fullhashes";
import { ThreatHits } from "./threathits";
import { ThreatListUpdates } from "./threatlistupdates";
import { ThreatLists } from "./threatlists";
import { ThreatMatches } from "./threatmatches";


export const ServerList = [
	"https://safebrowsing.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/safe-browsing/*/
export class SDK {
  public encodedFullHashes: EncodedFullHashes;
  public encodedUpdates: EncodedUpdates;
  public fullHashes: FullHashes;
  public threatHits: ThreatHits;
  public threatListUpdates: ThreatListUpdates;
  public threatLists: ThreatLists;
  public threatMatches: ThreatMatches;

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
    
    this.encodedFullHashes = new EncodedFullHashes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.encodedUpdates = new EncodedUpdates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fullHashes = new FullHashes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.threatHits = new ThreatHits(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.threatListUpdates = new ThreatListUpdates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.threatLists = new ThreatLists(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.threatMatches = new ThreatMatches(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}