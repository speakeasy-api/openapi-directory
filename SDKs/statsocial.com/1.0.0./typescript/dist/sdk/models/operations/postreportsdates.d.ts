import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReportsDatesQueryParams extends SpeakeasyBase {
    reportHash: string;
}
export declare class PostReportsDatesRequest extends SpeakeasyBase {
    queryParams: PostReportsDatesQueryParams;
}
export declare class PostReportsDatesResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    reportDates?: any;
    statusCode: number;
}
