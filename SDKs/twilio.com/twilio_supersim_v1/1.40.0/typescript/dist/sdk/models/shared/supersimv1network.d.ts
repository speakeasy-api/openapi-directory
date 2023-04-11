import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class SupersimV1Network extends SpeakeasyBase {
    /**
     * A human readable identifier of this resource.
     */
    friendlyName?: string;
    /**
     * Array of objects identifying the [MCC-MNCs](https://en.wikipedia.org/wiki/Mobile_country_code) that are included in the Network resource.
     */
    identifiers?: any[];
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Network resource.
     */
    isoCountry?: string;
    /**
     * The unique string that we created to identify the Network resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Network resource.
     */
    url?: string;
}
