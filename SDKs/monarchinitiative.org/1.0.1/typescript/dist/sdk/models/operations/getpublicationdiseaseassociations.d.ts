import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicationDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicationDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPublicationDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPublicationDiseaseAssociationsPathParams;
    queryParams: GetPublicationDiseaseAssociationsQueryParams;
}
export declare class GetPublicationDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
