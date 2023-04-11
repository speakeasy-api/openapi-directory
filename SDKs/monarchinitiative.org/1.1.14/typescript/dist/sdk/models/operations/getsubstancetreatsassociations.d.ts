import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSubstanceTreatsAssociationsRequest extends SpeakeasyBase {
    /**
     * Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
     */
    direct?: boolean;
    /**
     * Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
     */
    evidence?: string;
    /**
     * If true, excludes associations that involve IEAs (ECO:0000501)
     */
    excludeAutomaticAssertions?: boolean;
    /**
     * Enable faceting
     */
    facet?: boolean;
    /**
     * Fields to facet on
     */
    facetFields?: string[];
    /**
     * If true, returns a distinct set of association.objects (typically ontology terms). This appears at the top level of the results payload
     */
    fetchObjects?: boolean;
    /**
     * CURIE identifier of substance, e.g. CHEBI:40036
     */
    id: string;
    /**
     * number of rows
     */
    rows?: number;
    /**
     * Map objects up (slim) to a higher level category. Value can be ontology class ID or subset ID
     */
    slim?: string[];
    /**
     * beginning row
     */
    start?: number;
    /**
     * If true, excludes evidence objects in response
     */
    unselectEvidence?: boolean;
    /**
     * If true, returns results in compact associations format
     */
    useCompactAssociations?: boolean;
}
export declare class GetSubstanceTreatsAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
