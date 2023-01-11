import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypePhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypePhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypePhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypePhenotypeAssociationsPathParams;
    queryParams: GetGenotypePhenotypeAssociationsQueryParams;
}
export declare class GetGenotypePhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
