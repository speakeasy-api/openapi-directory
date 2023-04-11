import { SpeakeasyBase } from "../../../internal/utils";
import { CompactAssociationSet } from "./compactassociationset";
import { D2PAssociation } from "./d2passociation";
/**
 * Success
 */
export declare class D2PAssociationResults extends SpeakeasyBase {
    /**
     * Complete representation of full disease to phenotype association, plus evidence
     */
    associations?: D2PAssociation[];
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
