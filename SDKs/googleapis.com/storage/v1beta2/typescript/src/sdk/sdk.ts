import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { BucketAccessControls } from "./bucketaccesscontrols";
import { Buckets } from "./buckets";
import { Channels } from "./channels";
import { DefaultObjectAccessControls } from "./defaultobjectaccesscontrols";
import { ObjectAccessControls } from "./objectaccesscontrols";
import { Objects } from "./objects";


export const ServerList = [
	"https://storage.googleapis.com/storage/v1beta2",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://developers.google.com/storage/docs/json_api/*/
export class SDK {
  public bucketAccessControls: BucketAccessControls;
  public buckets: Buckets;
  public channels: Channels;
  public defaultObjectAccessControls: DefaultObjectAccessControls;
  public objectAccessControls: ObjectAccessControls;
  public objects: Objects;

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
    
    this.bucketAccessControls = new BucketAccessControls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.buckets = new Buckets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.channels = new Channels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.defaultObjectAccessControls = new DefaultObjectAccessControls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.objectAccessControls = new ObjectAccessControls(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.objects = new Objects(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}