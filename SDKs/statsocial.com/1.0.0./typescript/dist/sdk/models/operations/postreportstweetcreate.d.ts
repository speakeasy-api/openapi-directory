import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReportsTweetCreateQueryParams extends SpeakeasyBase {
    endDate: number;
    filter?: string;
    reportName: string;
    startDate: number;
    terms: string;
}
export declare class PostReportsTweetCreateRequest extends SpeakeasyBase {
    queryParams: PostReportsTweetCreateQueryParams;
}
export declare class PostReportsTweetCreateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    createTweet?: any;
    statusCode: number;
}
