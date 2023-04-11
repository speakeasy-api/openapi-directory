import { SpeakeasyBase } from "../../../internal/utils";
export declare class TestOrderCustomerMarketingRightsInfo extends SpeakeasyBase {
    /**
     * Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty. Acceptable values are: - "`denied`" - "`granted`"
     */
    explicitMarketingPreference?: string;
    /**
     * Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.
     */
    lastUpdatedTimestamp?: string;
}
