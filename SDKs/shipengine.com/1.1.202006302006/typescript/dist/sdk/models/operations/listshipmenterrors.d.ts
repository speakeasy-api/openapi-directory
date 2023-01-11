import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListShipmentErrorsPathParams extends SpeakeasyBase {
    shipmentId: string;
}
export declare class ListShipmentErrorsQueryParams extends SpeakeasyBase {
    page?: number;
    pagesize?: number;
}
export declare class ListShipmentErrorsRequest extends SpeakeasyBase {
    pathParams: ListShipmentErrorsPathParams;
    queryParams: ListShipmentErrorsQueryParams;
}
export declare class ListShipmentErrorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listShipmentErrorsResponseBody?: shared.ListShipmentErrorsResponseBody;
}
