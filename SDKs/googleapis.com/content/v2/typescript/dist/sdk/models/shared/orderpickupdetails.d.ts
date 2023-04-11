import { SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";
import { OrderPickupDetailsCollector } from "./orderpickupdetailscollector";
export declare class OrderPickupDetails extends SpeakeasyBase {
    address?: OrderAddress;
    /**
     * Collectors authorized to pick up shipment from the pickup location.
     */
    collectors?: OrderPickupDetailsCollector[];
    /**
     * ID of the pickup location.
     */
    locationId?: string;
}
