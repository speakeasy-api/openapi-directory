import { SpeakeasyBase } from "../../../internal/utils";
export declare class CarriersCarrier extends SpeakeasyBase {
    /**
     * The CLDR country code of the carrier (e.g., "US"). Always present.
     */
    country?: string;
    /**
     * A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService.
     */
    eddServices?: string[];
    /**
     * The name of the carrier (e.g., `"UPS"`). Always present.
     */
    name?: string;
    /**
     * A list of supported services (e.g., `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService.
     */
    services?: string[];
}
