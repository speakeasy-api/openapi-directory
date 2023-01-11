import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetModelPhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetModelPhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetModelPhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetModelPhenotypeAssociationsPathParams;
    queryParams: GetModelPhenotypeAssociationsQueryParams;
}
export declare class GetModelPhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
