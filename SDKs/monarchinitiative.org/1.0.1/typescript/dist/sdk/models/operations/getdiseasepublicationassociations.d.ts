import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDiseasePublicationAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDiseasePublicationAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetDiseasePublicationAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseasePublicationAssociationsPathParams;
    queryParams: GetDiseasePublicationAssociationsQueryParams;
}
export declare class GetDiseasePublicationAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
