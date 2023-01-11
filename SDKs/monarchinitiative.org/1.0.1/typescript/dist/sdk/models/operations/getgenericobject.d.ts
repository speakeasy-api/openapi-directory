import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGenericObjectPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetGenericObjectQueryParams extends SpeakeasyBase {
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
export declare class GetGenericObjectRequest extends SpeakeasyBase {
    pathParams: GetGenericObjectPathParams;
    queryParams: GetGenericObjectQueryParams;
}
export declare class GetGenericObjectResponse extends SpeakeasyBase {
    bioObject?: shared.BioObject;
    contentType: string;
    statusCode: number;
}
