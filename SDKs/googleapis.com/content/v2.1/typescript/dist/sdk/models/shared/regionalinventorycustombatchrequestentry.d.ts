import { SpeakeasyBase } from "../../../internal/utils";
import { RegionalInventory } from "./regionalinventory";
/**
 * A batch entry encoding a single non-batch regional inventory request.
 */
export declare class RegionalinventoryCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * The ID of the managing account.
     */
    merchantId?: string;
    /**
     * Method of the batch request entry. Acceptable values are: - "`insert`"
     */
    method?: string;
    /**
     * The ID of the product for which to update price and availability.
     */
    productId?: string;
    /**
     * Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.
     */
    regionalInventory?: RegionalInventory;
}
