import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPathwayDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPathwayDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetPathwayDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetPathwayDiseaseAssociationsPathParams;
    queryParams: GetPathwayDiseaseAssociationsQueryParams;
}
export declare class GetPathwayDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
