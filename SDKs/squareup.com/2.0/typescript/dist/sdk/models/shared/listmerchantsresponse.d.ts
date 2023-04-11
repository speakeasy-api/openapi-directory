import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Merchant } from "./merchant";
/**
 * The response object returned by the [ListMerchant](https://developer.squareup.com/reference/square_2021-08-18/merchants-api/list-merchants) endpoint.
 */
export declare class ListMerchantsResponse extends SpeakeasyBase {
    /**
     * If the  response is truncated, the cursor to use in next  request to fetch next set of objects.
     */
    cursor?: number;
    /**
     * Information on errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * The requested `Merchant` entities.
     */
    merchant?: Merchant[];
}
