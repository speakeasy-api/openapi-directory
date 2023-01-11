import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportsDatesQueryParams extends SpeakeasyBase {
    reportHash: string;
}
export declare class GetReportsDatesRequest extends SpeakeasyBase {
    queryParams: GetReportsDatesQueryParams;
}
export declare class GetReportsDatesResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    reportDates?: any;
    statusCode: number;
}
