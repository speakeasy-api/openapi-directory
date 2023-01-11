import { SpeakeasyBase } from "../../../internal/utils";
export declare class AutoHashtagQueryParams extends SpeakeasyBase {
    hashtagPosition?: string;
    maxHashtags?: number;
    post: string;
}
export declare class AutoHashtagRequest extends SpeakeasyBase {
    queryParams: AutoHashtagQueryParams;
}
export declare class AutoHashtagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
