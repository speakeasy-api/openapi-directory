import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVariantDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetVariantDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetVariantDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetVariantDiseaseAssociationsPathParams;
    queryParams: GetVariantDiseaseAssociationsQueryParams;
}
export declare class GetVariantDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
