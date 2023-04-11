import { SpeakeasyBase } from "../../../internal/utils";
import { Buyer } from "./buyer";
/**
 * A response containing buyer account information.
 */
export declare class ListBuyersResponse extends SpeakeasyBase {
    /**
     * List of buyers.
     */
    buyers?: Buyer[];
    /**
     * A token which can be passed to a subsequent call to the `ListBuyers` method to retrieve the next page of results in ListBuyersRequest.pageToken.
     */
    nextPageToken?: string;
}
