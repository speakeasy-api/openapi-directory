import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhenotypeGenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPhenotypeGenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPhenotypeGenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypeGenotypeAssociationsPathParams;
    queryParams: GetPhenotypeGenotypeAssociationsQueryParams;
}
export declare class GetPhenotypeGenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
