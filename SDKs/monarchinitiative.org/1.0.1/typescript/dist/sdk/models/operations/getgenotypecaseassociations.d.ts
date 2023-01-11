import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypeCaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypeCaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypeCaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypeCaseAssociationsPathParams;
    queryParams: GetGenotypeCaseAssociationsQueryParams;
}
export declare class GetGenotypeCaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
