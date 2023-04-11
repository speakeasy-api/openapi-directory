import { SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";
import { CompactAssociationSet } from "./compactassociationset";
/**
 * Success
 */
export declare class AssociationResults extends SpeakeasyBase {
    /**
     * Complete representation of full association object, plus evidence
     */
    associations?: Association[];
    /**
     * Compact representation in which objects (e.g. phenotypes) are collected for subject-predicate pairs
     */
    compactAssociations?: CompactAssociationSet[];
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
    /**
     * List of distinct objects used
     */
    objects?: string[];
}
