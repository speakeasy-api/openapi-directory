import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateShipmentRequest extends SpeakeasyBase {
    /**
     * Shipment ID
     */
    shipmentId: string;
    updateShipmentRequestBodyInput: shared.UpdateShipmentRequestBodyInput;
}
export declare class UpdateShipmentResponse extends SpeakeasyBase {
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
    updateShipmentResponseBody?: shared.UpdateShipmentResponseBody;
}
