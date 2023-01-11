import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiseaseVariantAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDiseaseVariantAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetDiseaseVariantAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseaseVariantAssociationsPathParams;
    queryParams: GetDiseaseVariantAssociationsQueryParams;
}
export declare class GetDiseaseVariantAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
