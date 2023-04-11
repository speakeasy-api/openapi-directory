import { SpeakeasyBase } from "../../../internal/utils";
/**
 * General settings of a partner.
 */
export declare class PartnerGeneralConfig extends SpeakeasyBase {
    /**
     * Immutable. Partner's currency in ISO 4217 format.
     */
    currencyCode?: string;
    /**
     * Immutable. The standard TZ database name of the partner's time zone. For example, `America/New_York`. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     */
    timeZone?: string;
}
