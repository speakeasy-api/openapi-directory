import { SpeakeasyBase } from "../../../internal/utils";
export declare class WirelessV1SimUsageRecord extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the UsageRecord resource.
     */
    accountSid?: string;
    /**
     * An object that describes the SIM's usage of Commands during the specified period. See [Commands Usage Object](https://www.twilio.com/docs/wireless/api/sim-usagerecord-resource#commands-usage-object).
     */
    commands?: any;
    /**
     * An object that describes the SIM's data usage during the specified period. See [Data Usage Object](https://www.twilio.com/docs/wireless/api/sim-usagerecord-resource#data-usage-object).
     */
    data?: any;
    /**
     * The time period for which the usage is reported. Contains `start` and `end` datetime values given as GMT in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    period?: any;
    /**
     * The SID of the [Sim resource](https://www.twilio.com/docs/wireless/api/sim-resource) that this Usage Record is for.
     */
    simSid?: string;
}
