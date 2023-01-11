import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Agr } from "./agr";
import { Annotation } from "./annotation";
import { Chromosome } from "./chromosome";
import { Gene } from "./gene";
import { Lookup } from "./lookup";
import { Map } from "./map";
import { Ontology } from "./ontology";
import { Pathway } from "./pathway";
import { Qtl } from "./qtl";
import { QuantitativePhenotype } from "./quantitativephenotype";
import { RatStrain } from "./ratstrain";
import { Sslp } from "./sslp";
import { Statistics } from "./statistics";
import { EnrichmentWebService } from "./enrichmentwebservice";


export const ServerList = [
	"https://mcw.edu//rest.rgd.mcw.edu/rgdws",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public agr: Agr;
  public annotation: Annotation;
  public chromosome: Chromosome;
  public gene: Gene;
  public lookup: Lookup;
  public map: Map;
  public ontology: Ontology;
  public pathway: Pathway;
  public qtl: Qtl;
  public quantitativePhenotype: QuantitativePhenotype;
  public ratStrain: RatStrain;
  public sslp: Sslp;
  public statistics: Statistics;
  public enrichmentWebService: EnrichmentWebService;

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
    
    this.agr = new Agr(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.annotation = new Annotation(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chromosome = new Chromosome(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.gene = new Gene(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.lookup = new Lookup(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.map = new Map(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ontology = new Ontology(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pathway = new Pathway(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.qtl = new Qtl(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.quantitativePhenotype = new QuantitativePhenotype(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ratStrain = new RatStrain(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sslp = new Sslp(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.statistics = new Statistics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.enrichmentWebService = new EnrichmentWebService(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}