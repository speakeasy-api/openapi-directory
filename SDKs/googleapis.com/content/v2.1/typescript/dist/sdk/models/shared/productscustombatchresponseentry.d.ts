import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { Product } from "./product";
/**
 * A batch entry encoding a single non-batch products response.
 */
export declare class ProductsCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry this entry responds to.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     *  Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
     */
    product?: Product;
}
