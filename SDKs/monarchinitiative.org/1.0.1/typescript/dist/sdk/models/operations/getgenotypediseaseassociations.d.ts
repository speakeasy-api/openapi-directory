import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenotypeDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenotypeDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenotypeDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenotypeDiseaseAssociationsPathParams;
    queryParams: GetGenotypeDiseaseAssociationsQueryParams;
}
export declare class GetGenotypeDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
