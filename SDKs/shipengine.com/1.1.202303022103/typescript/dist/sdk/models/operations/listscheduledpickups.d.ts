import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListScheduledPickupsRequest extends SpeakeasyBase {
    /**
     * Carrier ID
     */
    carrierId?: string;
    /**
     * Only return scheduled pickups that were created on or before a specific date/time
     */
    createdAtEnd?: Date;
    /**
     * Only return scheduled pickups that were created on or after a specific date/time
     */
    createdAtStart?: Date;
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
     * Warehouse ID
     */
    warehouseId?: string;
}
export declare class ListScheduledPickupsResponse extends SpeakeasyBase {
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
    getPickupsResponseBody?: shared.GetPickupsResponseBody;
}
