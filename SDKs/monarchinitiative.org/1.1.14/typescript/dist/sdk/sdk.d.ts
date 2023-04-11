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
import { Mme } from "./mme";
import { NlpAnnotate } from "./nlpannotate";
import { Ontol } from "./ontol";
import { OntolIdentifier } from "./ontolidentifier";
import { OntolLabeler } from "./ontollabeler";
import { Ontology } from "./ontology";
import { OwlOntology } from "./owlontology";
import { PairSim } from "./pairsim";
import { RelationUsage } from "./relationusage";
import { Search } from "./search";
import { Sim } from "./sim";
import { VariationSet } from "./variationset";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["/api"];
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
 * API integration layer for linked biological objects.
 *
 * @remarks
 *
 *  __Source:__ https://github.com/biolink/biolink-api/
 */
export declare class SDK {
    /**
     * Retrieve associations between entities or entity and descriptors
     */
    association: Association;
    /**
     * Retrieval of domain entities plus associations
     */
    bioentity: Bioentity;
    /**
     * Operations over sets of entities
     */
    bioentityset: Bioentityset;
    /**
     * Map gene IDs to their homologs
     */
    bioentitysetHomologs: BioentitysetHomologs;
    /**
     * maps a set of entities to a slim
     */
    bioentitysetSlimmer: BioentitysetSlimmer;
    /**
     * Operations on GO Causal Activity Models (GO-CAMs)
     */
    cam: Cam;
    /**
     * Operations on evidence graphs
     */
    evidenceGraph: EvidenceGraph;
    /**
     * Operations to retrieve sequence features
     */
    genomeFeatures: GenomeFeatures;
    /**
     * Operations over data graphs
     */
    graph: Graph;
    /**
     * mapping and resolution of identifiers
     */
    identifierMapper: IdentifierMapper;
    /**
     * identifier prefixes
     */
    identifierPrefixes: IdentifierPrefixes;
    /**
     * Individual humans (including patients), or organisms
     */
    individual: Individual;
    /**
     * Perform bulk operations
     */
    mart: Mart;
    /**
     * Get metadata
     */
    metadata: Metadata;
    /**
     * Match patients with similar diseases and non-human genes based on their phenotypes
     */
    mme: Mme;
    /**
     * annotate text using named entities
     */
    nlpAnnotate: NlpAnnotate;
    /**
     * extract a subgraph from an ontology
     */
    ontol: Ontol;
    /**
     * Retrieve IDs for labels
     */
    ontolIdentifier: OntolIdentifier;
    /**
     * Assign labels to IDs
     */
    ontolLabeler: OntolLabeler;
    /**
     * Operations on Ontology Terms and Subsets
     */
    ontology: Ontology;
    /**
     * OWL-level operations on an ontology
     */
    owlOntology: OwlOntology;
    /**
     * pairwise similarity between two entities
     */
    pairSim: PairSim;
    /**
     * Usage of different relationship types
     */
    relationUsage: RelationUsage;
    /**
     * Search for entities
     */
    search: Search;
    /**
     * Perform semantic similarity, ranking, and sufficiency scoring
     */
    sim: Sim;
    /**
     * Operations related to sets of variants
     */
    variationSet: VariationSet;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
