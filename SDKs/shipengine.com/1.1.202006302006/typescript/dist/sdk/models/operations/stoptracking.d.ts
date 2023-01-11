import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StopTrackingQueryParams extends SpeakeasyBase {
    carrierCode?: string;
    trackingNumber?: string;
}
export declare class StopTrackingRequest extends SpeakeasyBase {
    queryParams: StopTrackingQueryParams;
}
export declare class StopTrackingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    emptyResponseBody?: string;
    errorResponseBody?: shared.ErrorResponseBody;
}
