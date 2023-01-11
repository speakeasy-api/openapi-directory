import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhenotypeCaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPhenotypeCaseAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    rows?: number;
    slim?: string[];
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetPhenotypeCaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypeCaseAssociationsPathParams;
    queryParams: GetPhenotypeCaseAssociationsQueryParams;
}
export declare class GetPhenotypeCaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
