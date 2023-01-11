import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneFunctionAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGeneFunctionAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGeneFunctionAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneFunctionAssociationsPathParams;
    queryParams: GetGeneFunctionAssociationsQueryParams;
}
export declare class GetGeneFunctionAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
