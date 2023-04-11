import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryTransfer } from "./inventorytransfer";
/**
 * Success
 */
export declare class RetrieveInventoryTransferResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents the transfer of a quantity of product inventory at a
     *
     * @remarks
     * particular time from one location to another.
     */
    transfer?: InventoryTransfer;
}
