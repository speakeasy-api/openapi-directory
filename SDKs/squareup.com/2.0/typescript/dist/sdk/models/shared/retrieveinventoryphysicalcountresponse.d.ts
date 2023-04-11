import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryPhysicalCount } from "./inventoryphysicalcount";
/**
 * Success
 */
export declare class RetrieveInventoryPhysicalCountResponse extends SpeakeasyBase {
    /**
     * Represents the quantity of an item variation that is physically present
     *
     * @remarks
     * at a specific location, verified by a seller or a seller's employee. For example,
     * a physical count might come from an employee counting the item variations on
     * hand or from syncing with an external system.
     */
    count?: InventoryPhysicalCount;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
