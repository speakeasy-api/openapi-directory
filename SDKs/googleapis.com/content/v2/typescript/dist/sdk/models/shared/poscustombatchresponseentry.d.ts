import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { PosInventory } from "./posinventory";
import { PosSale } from "./possale";
import { PosStore } from "./posstore";
export declare class PosCustomBatchResponseEntry extends SpeakeasyBase {
    /**
     * The ID of the request entry to which this entry responds.
     */
    batchId?: number;
    /**
     * A list of errors returned by a failed batch entry.
     */
    errors?: Errors;
    /**
     * The absolute quantity of an item available at the given store.
     */
    inventory?: PosInventory;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`"
     */
    kind?: string;
    /**
     * The change of the available quantity of an item at the given store.
     */
    sale?: PosSale;
    /**
     * Store resource.
     */
    store?: PosStore;
}
