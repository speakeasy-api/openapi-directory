import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BusinessDayConfig } from "./businessdayconfig";
import { WarehouseCutoffTime } from "./warehousecutofftime";
/**
 * A fulfillment warehouse, which stores and handles inventory.
 */
export declare class Warehouse extends SpeakeasyBase {
    businessDayConfig?: BusinessDayConfig;
    cutoffTime?: WarehouseCutoffTime;
    /**
     * Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item.
     */
    handlingDays?: string;
    /**
     * Required. The name of the warehouse. Must be unique within account.
     */
    name?: string;
    shippingAddress?: Address;
}
