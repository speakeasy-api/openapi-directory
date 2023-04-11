import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class SearchResult extends SpeakeasyBase {
    /**
     * solr docs
     */
    docs?: Record<string, any>[];
    /**
     * Mapping between field names and association counts
     */
    facetCounts?: Record<string, any>;
    /**
     * Mapping between id and solr highlight
     */
    highlighting?: Record<string, any>;
    /**
     * total number of associations matching query
     */
    numFound?: number;
}
