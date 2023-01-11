import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCaseModelAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCaseModelAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetCaseModelAssociationsRequest extends SpeakeasyBase {
    pathParams: GetCaseModelAssociationsPathParams;
    queryParams: GetCaseModelAssociationsQueryParams;
}
export declare class GetCaseModelAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
