import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhenotypeDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPhenotypeDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPhenotypeDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypeDiseaseAssociationsPathParams;
    queryParams: GetPhenotypeDiseaseAssociationsQueryParams;
}
export declare class GetPhenotypeDiseaseAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    d2PAssociationResults?: shared.D2PAssociationResults;
    statusCode: number;
}
