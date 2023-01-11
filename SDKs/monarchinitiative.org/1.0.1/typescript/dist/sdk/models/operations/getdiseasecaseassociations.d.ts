import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiseaseCaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDiseaseCaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetDiseaseCaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseaseCaseAssociationsPathParams;
    queryParams: GetDiseaseCaseAssociationsQueryParams;
}
export declare class GetDiseaseCaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
