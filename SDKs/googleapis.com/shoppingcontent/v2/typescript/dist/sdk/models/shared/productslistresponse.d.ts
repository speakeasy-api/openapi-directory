import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Successful response
 */
export declare class ProductsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of products.
     */
    nextPageToken?: string;
    resources?: Product[];
}
