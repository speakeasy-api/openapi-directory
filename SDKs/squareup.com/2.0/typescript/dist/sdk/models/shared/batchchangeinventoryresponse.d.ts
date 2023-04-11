import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryChange } from "./inventorychange";
import { InventoryCount } from "./inventorycount";
/**
 * Success
 */
export declare class BatchChangeInventoryResponse extends SpeakeasyBase {
    /**
     * Changes created for the request.
     */
    changes?: InventoryChange[];
    /**
     * The current counts for all objects referenced in the request.
     */
    counts?: InventoryCount[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
