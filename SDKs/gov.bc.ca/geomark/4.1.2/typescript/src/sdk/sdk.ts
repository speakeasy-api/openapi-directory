import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { BoundingBox } from "./boundingbox";
import { Create } from "./create";
import { Feature } from "./feature";
import { Info } from "./info";
import { Parts } from "./parts";
import { Point } from "./point";


export const ServerList = [
	"https://apps.gov.bc.ca/pub/geomark",
	"https://test.apps.gov.bc.ca/pub/geomark",
	"https://delivery.apps.gov.bc.ca/pub/geomark",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}

/* SDK Documentation: https://www2.gov.bc.ca/gov/content?id=F6BAF45131954020BCFD2EBCC456F084 - Geomark Web Service*/
export class SDK {
  public boundingBox: BoundingBox;
  public create: Create;
  public feature: Feature;
  public info: Info;
  public parts: Parts;
  public point: Point;

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
    
    this.boundingBox = new BoundingBox(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.create = new Create(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.feature = new Feature(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.info = new Info(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.parts = new Parts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.point = new Point(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}