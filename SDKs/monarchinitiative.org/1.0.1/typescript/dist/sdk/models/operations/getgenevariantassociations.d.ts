import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneVariantAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGeneVariantAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGeneVariantAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneVariantAssociationsPathParams;
    queryParams: GetGeneVariantAssociationsQueryParams;
}
export declare class GetGeneVariantAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
