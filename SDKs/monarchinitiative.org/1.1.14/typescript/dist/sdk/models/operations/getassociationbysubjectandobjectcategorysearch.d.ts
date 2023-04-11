import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssociationBySubjectAndObjectCategorySearchRequest extends SpeakeasyBase {
    /**
     * Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
     */
    evidence?: string;
    /**
     * If true, excludes associations that involve IEAs (ECO:0000501)
     */
    excludeAutomaticAssertions?: boolean;
    /**
     * Object CURIE
     */
    object?: string;
    /**
     * Category of entity at link Object (target), e.g. gene, disease, phenotype
     */
    objectCategory: string;
    /**
     * Object taxon ID, e.g. NCBITaxon:10090 (Includes inferred associations, by default)
     */
    objectTaxon?: string;
    /**
     * Filter by relation CURIE, e.g. RO:0002200 (has_phenotype), RO:0002607 (is marker for), RO:HOM0000017 (orthologous to), etc.
     */
    relation?: string;
    /**
     * number of rows
     */
    rows?: number;
    /**
     * beginning row
     */
    start?: number;
    /**
     * Subject CURIE
     */
    subject?: string;
    /**
     * Category of entity at link Subject (source), e.g. gene, disease, phenotype
     */
    subjectCategory: string;
    /**
     * Subject taxon ID, e.g. NCBITaxon:9606 (Includes inferred associations, by default)
     */
    subjectTaxon?: string;
    /**
     * If true, excludes evidence objects in response
     */
    unselectEvidence?: boolean;
    /**
     * If true, returns results in compact associations format
     */
    useCompactAssociations?: boolean;
}
export declare class GetAssociationBySubjectAndObjectCategorySearchResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
