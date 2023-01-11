import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhenotypePublicationAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPhenotypePublicationAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPhenotypePublicationAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypePublicationAssociationsPathParams;
    queryParams: GetPhenotypePublicationAssociationsQueryParams;
}
export declare class GetPhenotypePublicationAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
