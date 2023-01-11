import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiseaseModelAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDiseaseModelAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetDiseaseModelAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseaseModelAssociationsPathParams;
    queryParams: GetDiseaseModelAssociationsQueryParams;
}
export declare class GetDiseaseModelAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
