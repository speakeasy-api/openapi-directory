import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessDayConfig } from "./businessdayconfig";
import { CutoffTime } from "./cutofftime";
import { HolidayCutoff } from "./holidaycutoff";
import { TransitTable } from "./transittable";
import { WarehouseBasedDeliveryTime } from "./warehousebaseddeliverytime";
export declare class DeliveryTime extends SpeakeasyBase {
    cutoffTime?: CutoffTime;
    handlingBusinessDayConfig?: BusinessDayConfig;
    /**
     * Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping.
     */
    holidayCutoffs?: HolidayCutoff[];
    /**
     * Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`.
     */
    maxHandlingTimeInDays?: number;
    /**
     * Maximum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`.
     */
    maxTransitTimeInDays?: number;
    /**
     * Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped.
     */
    minHandlingTimeInDays?: number;
    /**
     * Minimum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both.
     */
    minTransitTimeInDays?: number;
    transitBusinessDayConfig?: BusinessDayConfig;
    transitTimeTable?: TransitTable;
    /**
     * Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in DeliveryTime should be set.
     */
    warehouseBasedDeliveryTimes?: WarehouseBasedDeliveryTime[];
}
