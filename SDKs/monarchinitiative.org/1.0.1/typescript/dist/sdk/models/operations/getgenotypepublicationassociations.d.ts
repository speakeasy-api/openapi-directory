import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypePublicationAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypePublicationAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypePublicationAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypePublicationAssociationsPathParams;
    queryParams: GetGenotypePublicationAssociationsQueryParams;
}
export declare class GetGenotypePublicationAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
