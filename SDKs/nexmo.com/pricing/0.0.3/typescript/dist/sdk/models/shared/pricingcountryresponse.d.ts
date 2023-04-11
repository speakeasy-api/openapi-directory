import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkObject } from "./networkobject";
/**
 * Pricing information for a specific country.
 */
export declare class PricingCountryResponse extends SpeakeasyBase {
    /**
     * Two letter country code.
     */
    countryCode?: string;
    /**
     * Readable country name.
     */
    countryDisplayName?: string;
    /**
     * Readable country name.
     */
    countryName?: string;
    /**
     * The currency that your account is being billed in (by default `Euros—EUR`). Can change in the Dashboard to US Dollars—USD.
     */
    currency?: string;
    /**
     * The default price.
     */
    defaultPrice?: string;
    /**
     * The dialling prefix.
     */
    dialingPrefix?: string;
    /**
     * An array of network objects
     */
    networks?: NetworkObject[];
}
