import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetGeneDiseaseAssociationsAssociationTypeEnum {
    Causal = "causal",
    NonCausal = "non_causal",
    Both = "both"
}
export declare class GetGeneDiseaseAssociationsQueryParams extends SpeakeasyBase {
    associationType?: GetGeneDiseaseAssociationsAssociationTypeEnum;
    direct?: boolean;
    directTaxon?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    q?: string;
    relation?: string;
    rows?: number;
    slim?: string[];
    sort?: string;
    start?: number;
    taxon?: string[];
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetGeneDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneDiseaseAssociationsPathParams;
    queryParams: GetGeneDiseaseAssociationsQueryParams;
}
export declare class GetGeneDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
