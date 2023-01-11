import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostAnnotateQueryParams extends SpeakeasyBase {
    content?: string;
    excludeCategory?: string[];
    includeAbbreviation?: boolean;
    includeAcronym?: boolean;
    includeCategory?: string[];
    includeNumbers?: boolean;
    longestOnly?: boolean;
    minLength?: string;
}
export declare class PostAnnotateRequest extends SpeakeasyBase {
    queryParams: PostAnnotateQueryParams;
}
export declare class PostAnnotateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
