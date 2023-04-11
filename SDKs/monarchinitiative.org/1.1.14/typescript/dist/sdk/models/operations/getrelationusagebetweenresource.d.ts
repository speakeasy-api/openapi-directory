import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRelationUsageBetweenResourceRequest extends SpeakeasyBase {
    /**
     * Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
     *
     * @remarks
     *                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.
     *
     */
    evidence?: string;
    objectCategory: string;
    subjectCategory: string;
    /**
     * SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
     */
    subjectTaxon?: string;
}
export declare class GetRelationUsageBetweenResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    associationResults?: shared.AssociationResults[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
