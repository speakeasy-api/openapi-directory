import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReportsTwitterCreateQueryParams extends SpeakeasyBase {
    filter?: string;
    twitterHandle?: string;
    twitterId?: number;
}
export declare class PostReportsTwitterCreateRequest extends SpeakeasyBase {
    queryParams: PostReportsTwitterCreateQueryParams;
}
export declare class PostReportsTwitterCreateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    createTwitter?: any;
    statusCode: number;
}
