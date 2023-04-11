import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAssociationsBetweenRequest extends SpeakeasyBase {
    /**
     * Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default) or a specific publication or other supporting object, e.g. ZFIN:ZDB-PUB-060503-2
     */
    evidence?: string;
    /**
     * If true, excludes associations that involve IEAs (ECO:0000501)
     */
    excludeAutomaticAssertions?: boolean;
    /**
     * Return associations pointing to this node, e.g. MP:0013765. Can also be a biological entity such as a gene
     */
    object: string;
    /**
     * number of rows
     */
    rows?: number;
    /**
     * beginning row
     */
    start?: number;
    /**
     * Return associations emanating from this node, e.g. MGI:1342287 (If ID is from an ontology then results would include inferred associations, by default)
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
export declare class GetAssociationsBetweenResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
