import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiseaseGeneAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetDiseaseGeneAssociationsAssociationTypeEnum {
    Causal = "causal",
    NonCausal = "non_causal",
    Both = "both"
}
export declare class GetDiseaseGeneAssociationsQueryParams extends SpeakeasyBase {
    associationType?: GetDiseaseGeneAssociationsAssociationTypeEnum;
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
export declare class GetDiseaseGeneAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseaseGeneAssociationsPathParams;
    queryParams: GetDiseaseGeneAssociationsQueryParams;
}
export declare class GetDiseaseGeneAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
