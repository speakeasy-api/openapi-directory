import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagShipmentRequest extends SpeakeasyBase {
    /**
     * Shipment ID
     */
    shipmentId: string;
    tagName: string;
}
export declare class TagShipmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The requested object creation was a success.
     */
    tagShipmentResponseBody?: shared.TagShipmentResponseBody;
}
