import { SpeakeasyBase } from "../../../internal/utils";
export declare class CarriersCarrier extends SpeakeasyBase {
    /**
     * The CLDR country code of the carrier (for example, "US"). Always present.
     */
    country?: string;
    /**
     * A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService.
     */
    eddServices?: string[];
    /**
     * The name of the carrier (for example, `"UPS"`). Always present.
     */
    name?: string;
    /**
     * A list of supported services (for example, `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService.
     */
    services?: string[];
}
