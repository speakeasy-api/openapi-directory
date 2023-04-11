import { SpeakeasyBase } from "../../../internal/utils";
import { PosInventory } from "./posinventory";
import { PosSale } from "./possale";
import { PosStore } from "./posstore";
export declare class PosCustomBatchRequestEntry extends SpeakeasyBase {
    /**
     * An entry ID, unique within the batch request.
     */
    batchId?: number;
    /**
     * The absolute quantity of an item available at the given store.
     */
    inventory?: PosInventory;
    /**
     * The ID of the POS data provider.
     */
    merchantId?: string;
    /**
     * The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`"
     */
    method?: string;
    /**
     * The change of the available quantity of an item at the given store.
     */
    sale?: PosSale;
    /**
     * Store resource.
     */
    store?: PosStore;
    /**
     * The store code. This should be set only if the method is `delete` or `get`.
     */
    storeCode?: string;
    /**
     * The ID of the account for which to get/submit data.
     */
    targetMerchantId?: string;
}
