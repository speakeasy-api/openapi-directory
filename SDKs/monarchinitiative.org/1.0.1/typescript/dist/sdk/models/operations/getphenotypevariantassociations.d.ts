import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhenotypeVariantAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPhenotypeVariantAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPhenotypeVariantAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypeVariantAssociationsPathParams;
    queryParams: GetPhenotypeVariantAssociationsQueryParams;
}
export declare class GetPhenotypeVariantAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
