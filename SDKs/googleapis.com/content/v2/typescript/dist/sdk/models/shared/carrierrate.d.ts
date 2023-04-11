import { SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
export declare class CarrierRate extends SpeakeasyBase {
    /**
     * Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `getSupportedCarriers` method. Required.
     */
    carrierName?: string;
    /**
     * Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `getSupportedCarriers` method. Required.
     */
    carrierService?: string;
    flatAdjustment?: Price;
    /**
     * Name of the carrier rate. Must be unique per rate group. Required.
     */
    name?: string;
    /**
     * Shipping origin for this carrier rate. Required.
     */
    originPostalCode?: string;
    /**
     * Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional.
     */
    percentageAdjustment?: string;
}
