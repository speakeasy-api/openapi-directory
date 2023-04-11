import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListShipmentRatesRequest extends SpeakeasyBase {
    /**
     * Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     */
    createdAtStart?: Date;
    /**
     * Shipment ID
     */
    shipmentId: string;
}
export declare class ListShipmentRatesResponse extends SpeakeasyBase {
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
    listShipmentRatesResponseBody?: shared.ListShipmentRatesResponseBody;
}
