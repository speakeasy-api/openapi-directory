import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssociationsFromRequest extends SpeakeasyBase {
    /**
     * Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
     */
    evidence?: string;
    /**
     * If true, excludes associations that involve IEAs (ECO:0000501)
     */
    excludeAutomaticAssertions?: boolean;
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
     * Return associations emanating from this node, e.g. NCBIGene:84570, ZFIN:ZDB-GENE-050417-357 (If ID is from an ontology then results would include inferred associations, by default)
     */
    subject: string;
    /**
     * If true, excludes evidence objects in response
     */
    unselectEvidence?: boolean;
    /**
     * If true, returns results in compact associations format
     */
    useCompactAssociations?: boolean;
}
export declare class GetAssociationsFromResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
