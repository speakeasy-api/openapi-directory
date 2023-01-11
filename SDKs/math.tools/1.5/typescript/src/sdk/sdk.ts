import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { BaseConversion } from "./baseconversion";
import { NumberChecks } from "./numberchecks";
import { NumberFacts } from "./numberfacts";
import { NumberGeneration } from "./numbergeneration";
import { NumberSystemsConversion } from "./numbersystemsconversion";
import { NumberOfTheDay } from "./numberoftheday";
import { Pi } from "./pi";
import { Prime } from "./prime";
import { Spell } from "./spell";


export const ServerList = [
	"https://api.math.tools",
	"http://api.math.tools",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public baseConversion: BaseConversion;
  public numberChecks: NumberChecks;
  public numberFacts: NumberFacts;
  public numberGeneration: NumberGeneration;
  public numberSystemsConversion: NumberSystemsConversion;
  public numberOfTheDay: NumberOfTheDay;
  public pi: Pi;
  public prime: Prime;
  public spell: Spell;

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
    
    this.baseConversion = new BaseConversion(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.numberChecks = new NumberChecks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.numberFacts = new NumberFacts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.numberGeneration = new NumberGeneration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.numberSystemsConversion = new NumberSystemsConversion(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.numberOfTheDay = new NumberOfTheDay(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pi = new Pi(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.prime = new Prime(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.spell = new Spell(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}