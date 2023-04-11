import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLabelFromShipmentRequest extends SpeakeasyBase {
    createLabelFromShipmentRequestBody: shared.CreateLabelFromShipmentRequestBody;
    /**
     * Shipment ID
     */
    shipmentId: string;
}
export declare class CreateLabelFromShipmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The requested object creation was a success.
     */
    createLabelFromShipmentResponseBody?: shared.CreateLabelFromShipmentResponseBodyOutput;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
}
