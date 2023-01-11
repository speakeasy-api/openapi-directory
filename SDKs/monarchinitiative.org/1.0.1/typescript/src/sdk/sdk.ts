import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Association } from "./association";
import { Bioentity } from "./bioentity";
import { Bioentityset } from "./bioentityset";
import { BioentitysetHomologs } from "./bioentitysethomologs";
import { BioentitysetSlimmer } from "./bioentitysetslimmer";
import { Cam } from "./cam";
import { EvidenceGraph } from "./evidencegraph";
import { GenomeFeatures } from "./genomefeatures";
import { Graph } from "./graph";
import { IdentifierMapper } from "./identifiermapper";
import { IdentifierPrefixes } from "./identifierprefixes";
import { Individual } from "./individual";
import { Mart } from "./mart";
import { Metadata } from "./metadata";
import { NlpAnnotate } from "./nlpannotate";
import { Ontol } from "./ontol";
import { OntolLabeler } from "./ontollabeler";
import { Ontology } from "./ontology";
import { OwlOntology } from "./owlontology";
import { PairSim } from "./pairsim";
import { RelationUsage } from "./relationusage";
import { Search } from "./search";
import { Sim } from "./sim";
import { VariationSet } from "./variationset";


export const ServerList = [
	"https://monarchinitiative.org/api",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public association: Association;
  public bioentity: Bioentity;
  public bioentityset: Bioentityset;
  public bioentitysetHomologs: BioentitysetHomologs;
  public bioentitysetSlimmer: BioentitysetSlimmer;
  public cam: Cam;
  public evidenceGraph: EvidenceGraph;
  public genomeFeatures: GenomeFeatures;
  public graph: Graph;
  public identifierMapper: IdentifierMapper;
  public identifierPrefixes: IdentifierPrefixes;
  public individual: Individual;
  public mart: Mart;
  public metadata: Metadata;
  public nlpAnnotate: NlpAnnotate;
  public ontol: Ontol;
  public ontolLabeler: OntolLabeler;
  public ontology: Ontology;
  public owlOntology: OwlOntology;
  public pairSim: PairSim;
  public relationUsage: RelationUsage;
  public search: Search;
  public sim: Sim;
  public variationSet: VariationSet;

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
    
    this.association = new Association(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bioentity = new Bioentity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bioentityset = new Bioentityset(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bioentitysetHomologs = new BioentitysetHomologs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bioentitysetSlimmer = new BioentitysetSlimmer(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.cam = new Cam(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.evidenceGraph = new EvidenceGraph(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.genomeFeatures = new GenomeFeatures(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.graph = new Graph(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.identifierMapper = new IdentifierMapper(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.identifierPrefixes = new IdentifierPrefixes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.individual = new Individual(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mart = new Mart(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.metadata = new Metadata(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.nlpAnnotate = new NlpAnnotate(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ontol = new Ontol(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ontolLabeler = new OntolLabeler(
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
    
    this.owlOntology = new OwlOntology(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pairSim = new PairSim(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.relationUsage = new RelationUsage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.search = new Search(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.sim = new Sim(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.variationSet = new VariationSet(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}