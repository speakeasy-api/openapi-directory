import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAnnotateEntitiesQueryParams extends SpeakeasyBase {
    content?: string;
    excludeCategory?: string[];
    includeAbbreviation?: boolean;
    includeAcronym?: boolean;
    includeCategory?: string[];
    includeNumbers?: boolean;
    longestOnly?: boolean;
    minLength?: string;
}
export declare class GetAnnotateEntitiesRequest extends SpeakeasyBase {
    queryParams: GetAnnotateEntitiesQueryParams;
}
export declare class GetAnnotateEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    entityAnnotationResult?: shared.EntityAnnotationResult;
    statusCode: number;
}
