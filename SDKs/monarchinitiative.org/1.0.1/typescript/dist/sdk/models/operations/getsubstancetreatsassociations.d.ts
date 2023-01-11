import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSubstanceTreatsAssociationsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSubstanceTreatsAssociationsQueryParams extends SpeakeasyBase {
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
export declare class GetSubstanceTreatsAssociationsRequest extends SpeakeasyBase {
    pathParams: GetSubstanceTreatsAssociationsPathParams;
    queryParams: GetSubstanceTreatsAssociationsQueryParams;
}
export declare class GetSubstanceTreatsAssociationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
