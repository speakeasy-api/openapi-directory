import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork extends SpeakeasyBase {
    /**
     * A human readable identifier of the Network this resource refers to.
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
     * The unique string that identifies the Network resource's Network Access Profile resource.
     */
    networkAccessProfileSid?: string;
    /**
     * The unique string that identifies the Network resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Network resource.
     */
    url?: string;
}
