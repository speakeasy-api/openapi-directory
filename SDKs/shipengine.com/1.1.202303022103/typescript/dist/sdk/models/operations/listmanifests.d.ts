import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListManifestsRequest extends SpeakeasyBase {
    /**
     * Carrier ID
     */
    carrierId?: string;
    /**
     * Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)
     */
    createdAtEnd?: Date;
    /**
     * Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)
     */
    createdAtStart?: Date;
    labelIds?: string[];
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
     * ship date end range
     */
    shipDateEnd?: Date;
    /**
     * ship date start range
     */
    shipDateStart?: Date;
    /**
     * Warehouse ID
     */
    warehouseId?: string;
}
export declare class ListManifestsResponse extends SpeakeasyBase {
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
    listManifestsResponseBody?: shared.ListManifestsResponseBody;
}
