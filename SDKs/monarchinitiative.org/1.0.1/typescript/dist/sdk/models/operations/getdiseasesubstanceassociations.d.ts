import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDiseaseSubstanceAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDiseaseSubstanceAssociationsQueryParams extends SpeakeasyBase {
    direct?: boolean;
    evidence?: string;
    excludeAutomaticAssertions?: boolean;
    facet?: boolean;
    facetFields?: string[];
    fetchObjects?: boolean;
    rows?: number;
    slim?: string[];
    start?: number;
    unselectEvidence?: boolean;
    useCompactAssociations?: boolean;
}
export declare class GetDiseaseSubstanceAssociationsRequest extends SpeakeasyBase {
    pathParams: GetDiseaseSubstanceAssociationsPathParams;
    queryParams: GetDiseaseSubstanceAssociationsQueryParams;
}
export declare class GetDiseaseSubstanceAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
