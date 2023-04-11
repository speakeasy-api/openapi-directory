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
     * The Content API Supplemental Feed ID. If present then product insertion or deletion applies to a supplemental feed instead of primary Content API feed.
     */
    feedId?: string;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`update`"
     */
    method?: string;
    /**
     *  Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
     */
    product?: Product;
    /**
     * The ID of the product to get or mutate. Only defined if the method is `get`, `delete`, or `update`.
     */
    productId?: string;
    /**
     * The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. Only defined if the method is `update`.
     */
    updateMask?: string;
}
