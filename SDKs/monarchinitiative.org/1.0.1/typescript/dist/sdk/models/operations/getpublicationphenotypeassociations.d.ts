import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicationPhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicationPhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPublicationPhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPublicationPhenotypeAssociationsPathParams;
    queryParams: GetPublicationPhenotypeAssociationsQueryParams;
}
export declare class GetPublicationPhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
