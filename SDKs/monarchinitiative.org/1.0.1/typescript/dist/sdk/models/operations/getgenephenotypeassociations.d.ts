import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenePhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenePhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenePhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenePhenotypeAssociationsPathParams;
    queryParams: GetGenePhenotypeAssociationsQueryParams;
}
export declare class GetGenePhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
