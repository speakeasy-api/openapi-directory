import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListShipmentRatesPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class ListShipmentRatesQueryParams extends SpeakeasyBase {
    createdAtStart?: Date;
}
export declare class ListShipmentRatesRequest extends SpeakeasyBase {
    pathParams: ListShipmentRatesPathParams;
    queryParams: ListShipmentRatesQueryParams;
}
export declare class ListShipmentRatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listShipmentRatesResponseBody?: shared.ListShipmentRatesResponseBody;
}
