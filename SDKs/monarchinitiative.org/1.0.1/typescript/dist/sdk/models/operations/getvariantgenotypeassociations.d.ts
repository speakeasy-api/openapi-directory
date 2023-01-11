import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantGenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantGenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetVariantGenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetVariantGenotypeAssociationsPathParams;
    queryParams: GetVariantGenotypeAssociationsQueryParams;
}
export declare class GetVariantGenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
