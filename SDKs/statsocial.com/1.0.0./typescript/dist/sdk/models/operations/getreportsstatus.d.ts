import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetReportsStatusQueryParams extends SpeakeasyBase {
    reportHash: string;
}
export declare class GetReportsStatusRequest extends SpeakeasyBase {
    queryParams: GetReportsStatusQueryParams;
}
export declare class GetReportsStatusResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    reportStatus?: any;
    statusCode: number;
}
