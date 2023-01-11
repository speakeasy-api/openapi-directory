import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostReportsStatusQueryParams extends SpeakeasyBase {
    reportHash: string;
}
export declare class PostReportsStatusRequest extends SpeakeasyBase {
    queryParams: PostReportsStatusQueryParams;
}
export declare class PostReportsStatusResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    contentType: string;
    reportStatus?: any;
    statusCode: number;
}
