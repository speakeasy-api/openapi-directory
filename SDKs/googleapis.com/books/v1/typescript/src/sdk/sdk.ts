import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

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


export const ServerList = [
	"https://books.googleapis.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://code.google.com/apis/books/docs/v1/getting_started.html*/
export class SDK {
  public bookshelves: Bookshelves;
  public cloudloading: Cloudloading;
  public dictionary: Dictionary;
  public familysharing: Familysharing;
  public layers: Layers;
  public myconfig: Myconfig;
  public mylibrary: Mylibrary;
  public notification: Notification;
  public onboarding: Onboarding;
  public personalizedstream: Personalizedstream;
  public promooffer: Promooffer;
  public series: Series;
  public volumes: Volumes;

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
    
    this.bookshelves = new Bookshelves(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cloudloading = new Cloudloading(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dictionary = new Dictionary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.familysharing = new Familysharing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.layers = new Layers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.myconfig = new Myconfig(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mylibrary = new Mylibrary(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.notification = new Notification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.onboarding = new Onboarding(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.personalizedstream = new Personalizedstream(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.promooffer = new Promooffer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.series = new Series(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.volumes = new Volumes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}