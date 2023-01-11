import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneOrthologPhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGeneOrthologPhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGeneOrthologPhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneOrthologPhenotypeAssociationsPathParams;
    queryParams: GetGeneOrthologPhenotypeAssociationsQueryParams;
}
export declare class GetGeneOrthologPhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
