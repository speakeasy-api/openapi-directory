import { SpeakeasyBase } from "../../../internal/utils";
export declare class WarehouseCutoffTime extends SpeakeasyBase {
    /**
     * Required. Hour (24-hour clock) of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse.
     */
    hour?: number;
    /**
     * Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse.
     */
    minute?: number;
}
