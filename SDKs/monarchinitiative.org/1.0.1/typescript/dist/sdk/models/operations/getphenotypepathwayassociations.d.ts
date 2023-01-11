import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPhenotypePathwayAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPhenotypePathwayAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPhenotypePathwayAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPhenotypePathwayAssociationsPathParams;
    queryParams: GetPhenotypePathwayAssociationsQueryParams;
}
export declare class GetPhenotypePathwayAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
