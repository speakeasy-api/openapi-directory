import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypeGeneAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypeGeneAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypeGeneAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypeGeneAssociationsPathParams;
    queryParams: GetGenotypeGeneAssociationsQueryParams;
}
export declare class GetGenotypeGeneAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
