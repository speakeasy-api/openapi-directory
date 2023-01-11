import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrackingLogQueryParams extends SpeakeasyBase {
    carrierCode?: string;
    trackingNumber?: string;
}
export declare class GetTrackingLogRequest extends SpeakeasyBase {
    queryParams: GetTrackingLogQueryParams;
}
export declare class GetTrackingLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    getTrackingLogResponseBody?: shared.GetTrackingLogResponseBody;
}
