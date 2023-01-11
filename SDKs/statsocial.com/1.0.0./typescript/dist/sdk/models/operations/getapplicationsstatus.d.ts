import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApplicationsStatusQueryParams extends SpeakeasyBase {
    key: string;
}
export declare class GetApplicationsStatusRequest extends SpeakeasyBase {
    queryParams: GetApplicationsStatusQueryParams;
}
export declare class GetApplicationsStatusResponse extends SpeakeasyBase {
    fourHundredError?: any;
    fourHundredAndOneError?: any;
    fourHundredAndThreeError?: any;
    fiveHundredError?: any;
    applicationStatus?: any;
    contentType: string;
    statusCode: number;
}
