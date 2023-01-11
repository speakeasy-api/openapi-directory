import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReportsQueryParams extends SpeakeasyBase {
    baseline?: number;
    reportDate?: number;
    reportHash: string;
    sample: number;
}
export declare class GetReportsRequest extends SpeakeasyBase {
    queryParams: GetReportsQueryParams;
}
export declare class GetReportsResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    reportSuccess?: shared.ReportSuccess;
    statusCode: number;
}
