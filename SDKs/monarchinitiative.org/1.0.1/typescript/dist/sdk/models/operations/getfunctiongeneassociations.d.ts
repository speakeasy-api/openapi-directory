import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFunctionGeneAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetFunctionGeneAssociationsRelationshipTypeEnum {
    InvolvedIn = "involved_in",
    InvolvedInRegulationOf = "involved_in_regulation_of",
    ActsUpstreamOfOrWithin = "acts_upstream_of_or_within"
}
export declare class GetFunctionGeneAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    directTaxon?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    q?: string;
    relation?: string;
    relationshipType?: GetFunctionGeneAssociationsRelationshipTypeEnum;
    rows?: number;
    slim?: string[];
    sort?: string;
    start?: number;
    taxon?: string[];
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetFunctionGeneAssociationsRequest extends SpeakeasyBase {
    pathParams: GetFunctionGeneAssociationsPathParams;
    queryParams: GetFunctionGeneAssociationsQueryParams;
}
export declare class GetFunctionGeneAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
