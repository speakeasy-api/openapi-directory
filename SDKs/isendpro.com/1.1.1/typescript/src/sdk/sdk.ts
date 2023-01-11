import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AddShortlink } from "./addshortlink";
import { AddSubaccount } from "./addsubaccount";
import { Campagne } from "./campagne";
import { Comptage } from "./comptage";
import { Credit } from "./credit";
import { DelListeNoire } from "./dellistenoire";
import { EditSubaccount } from "./editsubaccount";
import { GetListeNoire } from "./getlistenoire";
import { Hlr } from "./hlr";
import { Repertoire } from "./repertoire";
import { SetListeNoire } from "./setlistenoire";
import { Sms } from "./sms";


export const ServerList = [
	"https://apirest.isendpro.com/cgi-bin",
	"http://apirest.isendpro.com/cgi-bin",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public addShortlink: AddShortlink;
  public addSubaccount: AddSubaccount;
  public campagne: Campagne;
  public comptage: Comptage;
  public credit: Credit;
  public delListeNoire: DelListeNoire;
  public editSubaccount: EditSubaccount;
  public getListeNoire: GetListeNoire;
  public hlr: Hlr;
  public repertoire: Repertoire;
  public setListeNoire: SetListeNoire;
  public sms: Sms;

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
    
    this.addShortlink = new AddShortlink(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.addSubaccount = new AddSubaccount(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.campagne = new Campagne(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.comptage = new Comptage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.credit = new Credit(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.delListeNoire = new DelListeNoire(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.editSubaccount = new EditSubaccount(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.getListeNoire = new GetListeNoire(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.hlr = new Hlr(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.repertoire = new Repertoire(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.setListeNoire = new SetListeNoire(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sms = new Sms(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}