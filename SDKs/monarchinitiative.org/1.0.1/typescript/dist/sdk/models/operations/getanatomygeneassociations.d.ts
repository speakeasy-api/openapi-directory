import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnatomyGeneAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAnatomyGeneAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetAnatomyGeneAssociationsRequest extends SpeakeasyBase {
    pathParams: GetAnatomyGeneAssociationsPathParams;
    queryParams: GetAnatomyGeneAssociationsQueryParams;
}
export declare class GetAnatomyGeneAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
