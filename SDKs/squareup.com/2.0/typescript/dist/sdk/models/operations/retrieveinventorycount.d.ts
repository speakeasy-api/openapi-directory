import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveInventoryCountSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveInventoryCountRequest extends SpeakeasyBase {
    /**
     * ID of the [CatalogObject](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogObject) to retrieve.
     */
    catalogObjectId: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this to retrieve the next set of results for the original query.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
    /**
     * The [Location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) IDs to look up as a comma-separated
     *
     * @remarks
     * list. An empty list queries all locations.
     */
    locationIds?: string;
}
export declare class RetrieveInventoryCountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveInventoryCountResponse?: shared.RetrieveInventoryCountResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
