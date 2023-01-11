import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartTrackingQueryParams extends SpeakeasyBase {
    carrierCode?: string;
    trackingNumber?: string;
}
export declare class StartTrackingRequest extends SpeakeasyBase {
    queryParams: StartTrackingQueryParams;
}
export declare class StartTrackingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
