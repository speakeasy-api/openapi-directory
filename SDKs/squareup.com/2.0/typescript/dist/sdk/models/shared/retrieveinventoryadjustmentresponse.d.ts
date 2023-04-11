import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { InventoryAdjustment } from "./inventoryadjustment";
/**
 * Success
 */
export declare class RetrieveInventoryAdjustmentResponse extends SpeakeasyBase {
    /**
     * Represents a change in state or quantity of product inventory at a
     *
     * @remarks
     * particular time and location.
     */
    adjustment?: InventoryAdjustment;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
