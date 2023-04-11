import { SpeakeasyBase } from "../../../internal/utils";
export declare class HolidaysHoliday extends SpeakeasyBase {
    /**
     * The CLDR territory code of the country in which the holiday is available. E.g. "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present.
     */
    countryCode?: string;
    /**
     * Date of the holiday, in ISO 8601 format. E.g. "2016-12-25" for Christmas 2016. Always present.
     */
    date?: string;
    /**
     * Date on which the order has to arrive at the customer's, in ISO 8601 format. E.g. "2016-12-24" for 24th December 2016. Always present.
     */
    deliveryGuaranteeDate?: string;
    /**
     * Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present.
     */
    deliveryGuaranteeHour?: string;
    /**
     * Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present.
     */
    id?: string;
    /**
     * The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father's Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother's Day`" - "`Thanksgiving`" - "`Valentine's Day`"
     */
    type?: string;
}
