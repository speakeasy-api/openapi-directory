import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostReportsQueryParams extends SpeakeasyBase {
    baseline?: number;
    reportDate?: number;
    reportHash: string;
    sample: number;
}
export declare class PostReportsRequest extends SpeakeasyBase {
    queryParams: PostReportsQueryParams;
}
export declare class PostReportsResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fourHundredAndFourError?: any;
    fiveHundredError?: any;
    contentType: string;
    reportSuccess?: shared.ReportSuccess;
    statusCode: number;
}
