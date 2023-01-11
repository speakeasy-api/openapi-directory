import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneExpressionAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGeneExpressionAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGeneExpressionAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneExpressionAssociationsPathParams;
    queryParams: GetGeneExpressionAssociationsQueryParams;
}
export declare class GetGeneExpressionAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
