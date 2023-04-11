import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Response message for listing products visible to the buyer.
 */
export declare class ListProductsResponse extends SpeakeasyBase {
    /**
     * List pagination support.
     */
    nextPageToken?: string;
    /**
     * The list of matching products at their head revision number.
     */
    products?: Product[];
}
