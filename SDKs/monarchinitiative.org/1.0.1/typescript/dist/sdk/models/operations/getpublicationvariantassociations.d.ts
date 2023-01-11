import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicationVariantAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicationVariantAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    directTaxon?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    q?: string;
    relation?: string;
    rows?: number;
    slim?: string[];
    sort?: string;
    start?: number;
    taxon?: string[];
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetPublicationVariantAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPublicationVariantAssociationsPathParams;
    queryParams: GetPublicationVariantAssociationsQueryParams;
}
export declare class GetPublicationVariantAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
