import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCaseDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCaseDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetCaseDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetCaseDiseaseAssociationsPathParams;
    queryParams: GetCaseDiseaseAssociationsQueryParams;
}
export declare class GetCaseDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
