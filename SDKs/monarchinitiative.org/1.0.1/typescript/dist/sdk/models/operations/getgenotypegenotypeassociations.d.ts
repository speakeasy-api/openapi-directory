import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypeGenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypeGenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypeGenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypeGenotypeAssociationsPathParams;
    queryParams: GetGenotypeGenotypeAssociationsQueryParams;
}
export declare class GetGenotypeGenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
