import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of network that number is associated with.
 */
export declare enum CarrierNetworkTypeEnum {
    Mobile = "mobile",
    Landline = "landline",
    LandlinePremium = "landline_premium",
    LandlineTollfree = "landline_tollfree",
    Virtual = "virtual",
    Unknown = "unknown",
    Pager = "pager"
}
export declare class Carrier extends SpeakeasyBase {
    /**
     * Country that number is associated with. In ISO 3166-1 alpha-2 format.
     */
    country: string;
    /**
     * The full name of the carrier that number is associated with.
     */
    name: string;
    /**
     * The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier.
     */
    networkCode: string;
    /**
     * Type of network that number is associated with.
     */
    networkType: CarrierNetworkTypeEnum;
}
