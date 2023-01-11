import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiseaseModelTaxonAssociationsPathParams extends SpeakeasyBase {
    id: string;
    taxon: string;
}
export declare class GetDiseaseModelTaxonAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetDiseaseModelTaxonAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseaseModelTaxonAssociationsPathParams;
    queryParams: GetDiseaseModelTaxonAssociationsQueryParams;
}
export declare class GetDiseaseModelTaxonAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
