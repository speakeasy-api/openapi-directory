import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * Successful response
 */
export declare class GetOffersResponse extends SpeakeasyBase {
    /**
     * The returned list of products.
     */
    products?: Product[];
}
