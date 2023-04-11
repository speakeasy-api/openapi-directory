import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSearchEntitiesRequest extends SpeakeasyBase {
    /**
     * boost function e.g. pow(edges,0.334)
     */
    boostFx?: string[];
    /**
     * boost query e.g. category:genotype^-10
     */
    boostQ?: string[];
    /**
     * e.g. gene, disease
     */
    category?: string[];
    /**
     * Exclude grouping classes (classes with subclasses)
     */
    excludeGroups?: boolean;
    /**
     * fq string passed directly to solr, note that multiple filters will be combined with an AND operator. Combining fq_string with other parameters may result in unexpected behavior.
     */
    fq?: string[];
    /**
     * highlight class
     */
    highlightClass?: string;
    /**
     * Include equivalent ids in prefix filter
     */
    includeEqs?: boolean;
    /**
     * minimum should match parameter, see solr docs for details
     */
    minMatch?: string;
    /**
     * set to true to use the minimal tokenizer, good for variants and genotypes
     */
    minimalTokenizer?: boolean;
    /**
     * ontology prefix: HP, -MONDO
     */
    prefix?: string[];
    /**
     * number of rows
     */
    rows?: number;
    /**
     * row number to start from
     */
    start?: string;
    /**
     * taxon filter, eg NCBITaxon:9606, includes inferred taxa
     */
    taxon?: string[];
    /**
     * search string, e.g. shh, parkinson, femur
     */
    term: string;
}
export declare class GetSearchEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchResult?: shared.SearchResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
