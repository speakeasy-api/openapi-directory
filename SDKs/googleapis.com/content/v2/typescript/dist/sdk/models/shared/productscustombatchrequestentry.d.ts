import { SpeakeasyBase } from "../../../internal/utils";
import { Product } from "./product";
/**
 * A batch entry encoding a single non-batch products request.
 */
export declare class ProductsCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`"
     */
    method?: string;
    /**
     *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
     */
    product?: Product;
    /**
     * The ID of the product to get or delete. Only defined if the method is `get` or `delete`.
     */
    productId?: string;
}
