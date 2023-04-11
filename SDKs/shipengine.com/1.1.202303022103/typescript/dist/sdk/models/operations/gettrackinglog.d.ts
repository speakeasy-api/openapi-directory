import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTrackingLogRequest extends SpeakeasyBase {
    /**
     * Carrier code used to retrieve tracking information
     */
    carrierCode?: string;
    /**
     * The tracking number associated with a shipment
     */
    trackingNumber?: string;
}
export declare class GetTrackingLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The request was a success.
     */
    getTrackingLogResponseBody?: shared.GetTrackingLogResponseBody;
}
