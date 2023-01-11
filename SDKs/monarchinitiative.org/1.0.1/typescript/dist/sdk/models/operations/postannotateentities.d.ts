import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAnnotateEntitiesQueryParams extends SpeakeasyBase {
    content?: string;
    excludeCategory?: string[];
    includeAbbreviation?: boolean;
    includeAcronym?: boolean;
    includeCategory?: string[];
    includeNumbers?: boolean;
    longestOnly?: boolean;
    minLength?: string;
}
export declare class PostAnnotateEntitiesRequest extends SpeakeasyBase {
    queryParams: PostAnnotateEntitiesQueryParams;
}
export declare class PostAnnotateEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    entityAnnotationResult?: shared.EntityAnnotationResult;
    statusCode: number;
}
