import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetModelDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetModelDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetModelDiseaseAssociationsPathParams;
    queryParams: GetModelDiseaseAssociationsQueryParams;
}
export declare class GetModelDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
