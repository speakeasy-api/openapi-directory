import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicationGenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPublicationGenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPublicationGenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPublicationGenotypeAssociationsPathParams;
    queryParams: GetPublicationGenotypeAssociationsQueryParams;
}
export declare class GetPublicationGenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
