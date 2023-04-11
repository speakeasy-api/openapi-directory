import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetShipmentByIdRequest extends SpeakeasyBase {
    /**
     * Shipment ID
     */
    shipmentId: string;
}
export declare class GetShipmentByIdResponse extends SpeakeasyBase {
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
    getShipmentByIdResponseBody?: shared.GetShipmentByIdResponseBody;
}
