import { Agr } from "./agr";
import { Annotation } from "./annotation";
import { Chromosome } from "./chromosome";
import { EnrichmentWebService } from "./enrichmentwebservice";
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
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["//rest.rgd.mcw.edu/rgdws"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The RGD REST API provides programmatic access to information and annotation stored in the Rat Genome Database
 */
export declare class SDK {
    /**
     * Alliance of Genome Resources
     */
    agr: Agr;
    annotation: Annotation;
    chromosome: Chromosome;
    gene: Gene;
    lookup: Lookup;
    /**
     * Map Web Service
     */
    map: Map;
    /**
     * Ontology Web Service
     */
    ontology: Ontology;
    pathway: Pathway;
    qtl: Qtl;
    /**
     * Phenotype Web Service
     */
    quantitativePhenotype: QuantitativePhenotype;
    ratStrain: RatStrain;
    /**
     * SSLP Web Service
     */
    sslp: Sslp;
    /**
     * Stats Web Service
     */
    statistics: Statistics;
    /**
     * Enrichment Web Service
     */
    enrichmentWebService: EnrichmentWebService;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
