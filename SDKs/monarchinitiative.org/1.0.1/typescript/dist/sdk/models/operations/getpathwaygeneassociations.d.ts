import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPathwayGeneAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPathwayGeneAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPathwayGeneAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPathwayGeneAssociationsPathParams;
    queryParams: GetPathwayGeneAssociationsQueryParams;
}
export declare class GetPathwayGeneAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
