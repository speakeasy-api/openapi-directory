import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypeModelAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypeModelAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypeModelAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypeModelAssociationsPathParams;
    queryParams: GetGenotypeModelAssociationsQueryParams;
}
export declare class GetGenotypeModelAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
