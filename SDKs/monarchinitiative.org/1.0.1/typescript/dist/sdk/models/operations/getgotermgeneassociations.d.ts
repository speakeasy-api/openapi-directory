import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGotermGeneAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare enum GetGotermGeneAssociationsRelationshipTypeEnum {
    InvolvedIn = "involved_in",
    InvolvedInRegulationOf = "involved_in_regulation_of",
    ActsUpstreamOfOrWithin = "acts_upstream_of_or_within"
}
export declare class GetGotermGeneAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    relationshipType?: GetGotermGeneAssociationsRelationshipTypeEnum;
    rows?: number;
    slim?: string[];
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetGotermGeneAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGotermGeneAssociationsPathParams;
    queryParams: GetGotermGeneAssociationsQueryParams;
}
export declare class GetGotermGeneAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
