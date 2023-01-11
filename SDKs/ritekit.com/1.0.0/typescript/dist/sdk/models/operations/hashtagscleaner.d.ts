import { SpeakeasyBase } from "../../../internal/utils";
export declare class HashtagsCleanerQueryParams extends SpeakeasyBase {
    post: string;
}
export declare class HashtagsCleanerRequest extends SpeakeasyBase {
    queryParams: HashtagsCleanerQueryParams;
}
export declare class HashtagsCleanerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
