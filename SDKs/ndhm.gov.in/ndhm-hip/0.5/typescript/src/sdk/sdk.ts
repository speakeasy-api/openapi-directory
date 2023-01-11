import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Gateway } from "./gateway";
import { ConsentFlow } from "./consentflow";
import { DataFlow } from "./dataflow";
import { DataTransfer } from "./datatransfer";
import { Discovery } from "./discovery";
import { Link } from "./link";
import { Monitoring } from "./monitoring";
import { PatientNotification } from "./patientnotification";
import { Profile } from "./profile";
import { UserAuth } from "./userauth";


export const ServerList = [
	"https://dev.ndhm.gov.in/gateway",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public gateway: Gateway;
  public consentFlow: ConsentFlow;
  public dataFlow: DataFlow;
  public dataTransfer: DataTransfer;
  public discovery: Discovery;
  public link: Link;
  public monitoring: Monitoring;
  public patientNotification: PatientNotification;
  public profile: Profile;
  public userAuth: UserAuth;

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
    
    this.gateway = new Gateway(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.consentFlow = new ConsentFlow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataFlow = new DataFlow(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.dataTransfer = new DataTransfer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.discovery = new Discovery(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.link = new Link(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.monitoring = new Monitoring(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.patientNotification = new PatientNotification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.profile = new Profile(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userAuth = new UserAuth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}