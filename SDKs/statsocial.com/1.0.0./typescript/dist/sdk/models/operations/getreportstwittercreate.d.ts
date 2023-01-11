import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportsTwitterCreateQueryParams extends SpeakeasyBase {
    filter?: string;
    twitterHandle?: string;
    twitterId?: number;
}
export declare class GetReportsTwitterCreateRequest extends SpeakeasyBase {
    queryParams: GetReportsTwitterCreateQueryParams;
}
export declare class GetReportsTwitterCreateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    createTwitter?: any;
    statusCode: number;
}
