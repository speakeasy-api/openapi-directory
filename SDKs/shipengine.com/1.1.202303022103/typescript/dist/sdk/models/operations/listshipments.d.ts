import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Controls the sort order of queries
 *
 * @remarks
 *
 * |Value     |Description
 * |:---------|:-----------------------------------------------------
 * |`asc`     |Return results in ascending order
 * |`desc`    |Return results in descending order
 *
 */
export declare enum ListShipmentsSortDirSortDirEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ListShipmentsRequest extends SpeakeasyBase {
    /**
     * Batch ID
     */
    batchId?: string;
    /**
     * Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     */
    createdAtEnd?: Date;
    /**
     * Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     */
    createdAtStart?: Date;
    /**
     * Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)
     */
    modifiedAtEnd?: Date;
    /**
     * Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)
     */
    modifiedAtStart?: Date;
    /**
     * Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.
     *
     * @remarks
     *
     */
    page?: number;
    /**
     * The number of results to return per response.
     */
    pageSize?: number;
    /**
     * Sales Order ID
     */
    salesOrderId?: string;
    /**
     * The possible shipment status values
     */
    shipmentStatus?: shared.ShipmentStatusEnum;
    /**
     * The possible shipments sort by values
     */
    sortBy?: shared.ShipmentsSortByEnum;
    /**
     * Controls the sort order of the query.
     */
    sortDir?: ListShipmentsSortDirSortDirEnum;
    /**
     * Search for shipments based on the custom tag added to the shipment object
     */
    tag?: string;
}
export declare class ListShipmentsResponse extends SpeakeasyBase {
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
    listShipmentsResponseBody?: shared.ListShipmentsResponseBody;
}
