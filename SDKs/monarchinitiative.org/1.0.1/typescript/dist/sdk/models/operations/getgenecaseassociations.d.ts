import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneCaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGeneCaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGeneCaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneCaseAssociationsPathParams;
    queryParams: GetGeneCaseAssociationsQueryParams;
}
export declare class GetGeneCaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
