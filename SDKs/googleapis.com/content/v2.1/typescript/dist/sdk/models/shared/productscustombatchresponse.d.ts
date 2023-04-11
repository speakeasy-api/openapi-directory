import { SpeakeasyBase } from "../../../internal/utils";
import { ProductsCustomBatchResponseEntry } from "./productscustombatchresponseentry";
/**
 * Successful response
 */
export declare class ProductsCustomBatchResponse extends SpeakeasyBase {
    /**
     * The result of the execution of the batch requests.
     */
    entries?: ProductsCustomBatchResponseEntry[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponse`".
     */
    kind?: string;
}
