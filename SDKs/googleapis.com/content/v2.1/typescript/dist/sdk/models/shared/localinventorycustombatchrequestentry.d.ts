import { SpeakeasyBase } from "../../../internal/utils";
import { LocalInventory } from "./localinventory";
/**
 * Batch entry encoding a single local inventory update request.
 */
export declare class LocalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * Local inventory resource. For accepted attribute values, see the local product inventory feed specification.
     */
    localInventory?: LocalInventory;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * Method of the batch request entry. Acceptable values are: - "`insert`"
     */
    method?: string;
    /**
     * The ID of the product for which to update local inventory.
     */
    productId?: string;
}
