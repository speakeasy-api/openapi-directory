import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantModelAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantModelAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetVariantModelAssociationsRequest extends SpeakeasyBase {
    pathParams: GetVariantModelAssociationsPathParams;
    queryParams: GetVariantModelAssociationsQueryParams;
}
export declare class GetVariantModelAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
