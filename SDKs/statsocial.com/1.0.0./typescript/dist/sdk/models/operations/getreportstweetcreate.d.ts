import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportsTweetCreateQueryParams extends SpeakeasyBase {
    endDate: number;
    filter?: string;
    reportName: string;
    startDate: number;
    terms: string;
}
export declare class GetReportsTweetCreateRequest extends SpeakeasyBase {
    queryParams: GetReportsTweetCreateQueryParams;
}
export declare class GetReportsTweetCreateResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    createTweet?: any;
    statusCode: number;
}
