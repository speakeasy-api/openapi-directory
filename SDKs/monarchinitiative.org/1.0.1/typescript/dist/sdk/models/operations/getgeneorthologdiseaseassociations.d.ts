import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeneOrthologDiseaseAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGeneOrthologDiseaseAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetGeneOrthologDiseaseAssociationsRequest extends SpeakeasyBase {
    pathParams: GetGeneOrthologDiseaseAssociationsPathParams;
    queryParams: GetGeneOrthologDiseaseAssociationsQueryParams;
}
export declare class GetGeneOrthologDiseaseAssociationsResponse extends SpeakeasyBase {
    associationResults?: shared.AssociationResults;
    contentType: string;
    statusCode: number;
}
