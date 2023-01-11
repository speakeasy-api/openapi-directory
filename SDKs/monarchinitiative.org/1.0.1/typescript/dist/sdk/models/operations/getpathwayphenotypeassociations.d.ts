import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPathwayPhenotypeAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPathwayPhenotypeAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPathwayPhenotypeAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPathwayPhenotypeAssociationsPathParams;
    queryParams: GetPathwayPhenotypeAssociationsQueryParams;
}
export declare class GetPathwayPhenotypeAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
