import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicationGeneAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicationGeneAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPublicationGeneAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPublicationGeneAssociationsPathParams;
    queryParams: GetPublicationGeneAssociationsQueryParams;
}
export declare class GetPublicationGeneAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
