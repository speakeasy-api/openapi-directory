import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Successful response
 */
export declare class ListProductsResponse extends SpeakeasyBase {
    /**
     * The token for the retrieval of the next page of product statuses.
     */
    nextPageToken?: string;
    /**
     * List of the products.
     */
    products?: Product[];
}
