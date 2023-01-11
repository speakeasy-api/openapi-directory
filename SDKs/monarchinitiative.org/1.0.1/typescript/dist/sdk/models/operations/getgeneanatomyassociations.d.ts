import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneAnatomyAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGeneAnatomyAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGeneAnatomyAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneAnatomyAssociationsPathParams;
    queryParams: GetGeneAnatomyAssociationsQueryParams;
}
export declare class GetGeneAnatomyAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
