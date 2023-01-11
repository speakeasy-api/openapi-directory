import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenePathwayAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenePathwayAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGenePathwayAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGenePathwayAssociationsPathParams;
    queryParams: GetGenePathwayAssociationsQueryParams;
}
export declare class GetGenePathwayAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
