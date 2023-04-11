import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a country that can be targeted by ads.
 */
export declare class Country extends SpeakeasyBase {
    /**
     * Country code.
     */
    countryCode?: string;
    /**
     * DART ID of this country. This is the ID used for targeting and generating reports.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#country".
     */
    kind?: string;
    /**
     * Name of this country.
     */
    name?: string;
    /**
     * Whether ad serving supports secure servers in this country.
     */
    sslEnabled?: boolean;
}
