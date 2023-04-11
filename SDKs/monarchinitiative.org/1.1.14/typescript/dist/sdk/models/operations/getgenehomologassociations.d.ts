import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * P (paralog), O (Ortholog) or LDO (least-diverged ortholog)
 */
export declare enum GetGeneHomologAssociationsHomologyTypeEnum {
    P = "P",
    O = "O",
    Ldo = "LDO"
}
export declare class GetGeneHomologAssociationsRequest extends SpeakeasyBase {
    /**
     * Set true to only include direct associations, and false to include inferred (via subclass or subclass|part of), default=False
     */
    direct?: boolean;
    /**
     * Set true to exclude inferred taxa
     */
    directTaxon?: boolean;
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
     * P (paralog), O (Ortholog) or LDO (least-diverged ortholog)
     */
    homologyType?: GetGeneHomologAssociationsHomologyTypeEnum;
    /**
     * id, e.g. NCBIGene:3630. Equivalent IDs can be used with same results
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
     * Taxon CURIE of homolog, e.g. NCBITaxon:9606 (Can be an ancestral node in the ontology; includes inferred associations by default)
     */
    taxon?: string[];
    /**
     * If true, excludes evidence objects in response
     */
    unselectEvidence?: boolean;
    /**
     * If true, returns results in compact associations format
     */
    useCompactAssociations?: boolean;
}
export declare class GetGeneHomologAssociationsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
