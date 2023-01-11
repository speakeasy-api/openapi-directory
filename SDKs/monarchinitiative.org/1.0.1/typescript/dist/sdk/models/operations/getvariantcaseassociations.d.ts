import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantCaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantCaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetVariantCaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetVariantCaseAssociationsPathParams;
    queryParams: GetVariantCaseAssociationsQueryParams;
}
export declare class GetVariantCaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
