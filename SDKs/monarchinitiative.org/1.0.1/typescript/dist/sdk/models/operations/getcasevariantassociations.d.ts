import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCaseVariantAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetCaseVariantAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetCaseVariantAssociationsRequest extends SpeakeasyBase {
    pathParams: GetCaseVariantAssociationsPathParams;
    queryParams: GetCaseVariantAssociationsQueryParams;
}
export declare class GetCaseVariantAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
