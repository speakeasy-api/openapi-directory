import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The rate type. Acceptable values are `INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED`, `INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR`, and `INVENTORY_SOURCE_RATE_TYPE_CPD`.
 */
export declare enum RateDetailsInventorySourceRateTypeEnum {
    InventorySourceRateTypeUnspecified = "INVENTORY_SOURCE_RATE_TYPE_UNSPECIFIED",
    InventorySourceRateTypeCpmFixed = "INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED",
    InventorySourceRateTypeCpmFloor = "INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR",
    InventorySourceRateTypeCpd = "INVENTORY_SOURCE_RATE_TYPE_CPD",
    InventorySourceRateTypeFlat = "INVENTORY_SOURCE_RATE_TYPE_FLAT"
}
/**
 * The rate related settings of the inventory source.
 */
export declare class RateDetails extends SpeakeasyBase {
    /**
     * The rate type. Acceptable values are `INVENTORY_SOURCE_RATE_TYPE_CPM_FIXED`, `INVENTORY_SOURCE_RATE_TYPE_CPM_FLOOR`, and `INVENTORY_SOURCE_RATE_TYPE_CPD`.
     */
    inventorySourceRateType?: RateDetailsInventorySourceRateTypeEnum;
    /**
     * Represents an amount of money with its currency type.
     */
    minimumSpend?: Money;
    /**
     * Represents an amount of money with its currency type.
     */
    rate?: Money;
    /**
     * Required for guaranteed inventory sources. The number of impressions guaranteed by the seller.
     */
    unitsPurchased?: string;
}
