import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssociationBySubjectAndAssocTypeRequest extends SpeakeasyBase {
    /**
     * Association type, eg gene_phenotype
     */
    associationType: string;
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
     * If true, excludes evidence objects in response
     */
    unselectEvidence?: boolean;
    /**
     * If true, returns results in compact associations format
     */
    useCompactAssociations?: boolean;
}
export declare class GetAssociationBySubjectAndAssocTypeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
