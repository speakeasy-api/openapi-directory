import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelCaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetModelCaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetModelCaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetModelCaseAssociationsPathParams;
    queryParams: GetModelCaseAssociationsQueryParams;
}
export declare class GetModelCaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
