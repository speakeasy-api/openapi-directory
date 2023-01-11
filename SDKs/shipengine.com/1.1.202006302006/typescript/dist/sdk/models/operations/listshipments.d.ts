import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListShipmentsQueryParams extends SpeakeasyBase {
    batchId?: string;
    createdAtEnd?: Date;
    createdAtStart?: Date;
    modifiedAtEnd?: Date;
    modifiedAtStart?: Date;
    page?: number;
    pageSize?: number;
    salesOrderId?: string;
    shipmentStatus?: shared.ShipmentStatusEnum;
    sortBy?: shared.ShipmentsSortByEnum;
    sortDir?: Record<string, any>;
    tag?: string;
}
export declare class ListShipmentsRequest extends SpeakeasyBase {
    queryParams: ListShipmentsQueryParams;
}
export declare class ListShipmentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    errorResponseBody?: shared.ErrorResponseBody;
    listShipmentsResponseBody?: shared.ListShipmentsResponseBody;
}
