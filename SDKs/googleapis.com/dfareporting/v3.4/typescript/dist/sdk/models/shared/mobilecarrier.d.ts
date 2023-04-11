import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a mobile carrier that can be targeted by ads.
 */
export declare class MobileCarrier extends SpeakeasyBase {
    /**
     * Country code of the country to which this mobile carrier belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this mobile carrier belongs.
     */
    countryDartId?: string;
    /**
     * ID of this mobile carrier.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileCarrier".
     */
    kind?: string;
    /**
     * Name of this mobile carrier.
     */
    name?: string;
}
