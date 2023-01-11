import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypeVariantAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypeVariantAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypeVariantAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypeVariantAssociationsPathParams;
    queryParams: GetGenotypeVariantAssociationsQueryParams;
}
export declare class GetGenotypeVariantAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
