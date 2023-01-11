import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantPhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantPhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetVariantPhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetVariantPhenotypeAssociationsPathParams;
    queryParams: GetVariantPhenotypeAssociationsQueryParams;
}
export declare class GetVariantPhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
