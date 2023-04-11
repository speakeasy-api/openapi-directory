import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Controls which field the query is sorted by.
 */
export declare enum ListLabelsSortByEnum {
    ModifiedAt = "modified_at",
    CreatedAt = "created_at"
}
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
export declare enum ListLabelsSortDirSortDirEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ListLabelsRequest extends SpeakeasyBase {
    /**
     * Only return labels that were created in a specific [batch](https://www.shipengine.com/docs/labels/bulk/)
     */
    batchId?: string;
    /**
     * Only return labels for a specific [carrier account](https://www.shipengine.com/docs/carriers/setup/)
     */
    carrierId?: string;
    /**
     * Only return labels that were created on or before a specific date/time
     */
    createdAtEnd?: Date;
    /**
     * Only return labels that were created on or after a specific date/time
     */
    createdAtStart?: Date;
    /**
     * Only return labels that are currently in the specified status
     */
    labelStatus?: shared.LabelStatusEnum;
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
     * Rate ID
     */
    rateId?: string;
    /**
     * Only return labels for a specific [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/)
     */
    serviceCode?: string;
    /**
     * Shipment ID
     */
    shipmentId?: string;
    /**
     * Controls which field the query is sorted by.
     */
    sortBy?: ListLabelsSortByEnum;
    /**
     * Controls the sort order of the query.
     */
    sortDir?: ListLabelsSortDirSortDirEnum;
    /**
     * Only return labels with a specific tracking number
     */
    trackingNumber?: string;
    /**
     * Only return labels that originate from a specific [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/)
     */
    warehouseId?: string;
}
export declare class ListLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request contained errors.
     */
    errorResponseBody?: shared.ErrorResponseBody;
    /**
     * The response includes a `labels` array containing a page of results (as determined by the `page_size` query parameter).  It also includes other useful information, such as the total number of labels that match the query criteria, the number of pages of results, and the URLs of the first, last, next, and previous pages of results.
     *
     * @remarks
     *
     */
    listLabelsResponseBody?: Record<string, any>;
}
