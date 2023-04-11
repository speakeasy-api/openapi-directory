import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopTrackingRequest extends SpeakeasyBase {
    /**
     * Carrier code used to retrieve tracking information
     */
    carrierCode?: string;
    /**
     * The tracking number associated with a shipment
     */
    trackingNumber?: string;
}
export declare class StopTrackingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successful.
     */
    emptyResponseBody?: string;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
