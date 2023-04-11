import { SpeakeasyBase } from "../../../internal/utils";
export declare class WirelessV1AccountUsageRecord extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the AccountUsageRecord resource.
     */
    accountSid?: string;
    /**
     * An object that describes the aggregated Commands usage for all SIMs during the specified period. See [Commands Usage Object](https://www.twilio.com/docs/wireless/api/account-usagerecord-resource#commands-usage-object).
     */
    commands?: any;
    /**
     * An object that describes the aggregated Data usage for all SIMs over the period. See [Data Usage Object](https://www.twilio.com/docs/wireless/api/account-usagerecord-resource#data-usage-object).
     */
    data?: any;
    /**
     * The time period for which usage is reported. Contains `start` and `end` properties that describe the period using GMT date-time values specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    period?: any;
}
