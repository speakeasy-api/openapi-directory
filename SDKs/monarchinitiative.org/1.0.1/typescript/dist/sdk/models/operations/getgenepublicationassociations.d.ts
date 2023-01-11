import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenePublicationAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenePublicationAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenePublicationAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenePublicationAssociationsPathParams;
    queryParams: GetGenePublicationAssociationsQueryParams;
}
export declare class GetGenePublicationAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
