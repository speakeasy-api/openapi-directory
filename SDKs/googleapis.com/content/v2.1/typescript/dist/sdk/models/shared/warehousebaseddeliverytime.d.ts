import { SpeakeasyBase } from "../../../internal/utils";
export declare class WarehouseBasedDeliveryTime extends SpeakeasyBase {
    /**
     * Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `listSupportedCarriers` method.
     */
    carrier?: string;
    /**
     * Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list.
     */
    carrierService?: string;
    /**
     * Shipping origin's state.
     */
    originAdministrativeArea?: string;
    /**
     * Shipping origin's city.
     */
    originCity?: string;
    /**
     * Shipping origin's country represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).
     */
    originCountry?: string;
    /**
     * Shipping origin.
     */
    originPostalCode?: string;
    /**
     * Shipping origin's street address.
     */
    originStreetAddress?: string;
    /**
     * The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse.
     */
    warehouseName?: string;
}
