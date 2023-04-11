import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class WirelessV1RatePlan extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the RatePlan resource.
     */
    accountSid?: string;
    /**
     * Whether SIMs can use GPRS/3G/4G/LTE data connectivity.
     */
    dataEnabled?: boolean;
    /**
     * The total data usage (download and upload combined) in Megabytes that the Network allows during one month on the home network (T-Mobile USA). The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB.
     */
    dataLimit?: number;
    /**
     * The model used to meter data usage. Can be: `payg` and `quota-1`, `quota-10`, and `quota-50`. Learn more about the available [data metering models](https://www.twilio.com/docs/wireless/api/rateplan-resource#payg-vs-quota-data-plans).
     */
    dataMetering?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The list of services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States. Can contain: `data` and `messaging`.
     */
    internationalRoaming?: string[];
    /**
     * The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States. Can be up to 2TB.
     */
    internationalRoamingDataLimit?: number;
    /**
     * Whether SIMs can make, send, and receive SMS using [Commands](https://www.twilio.com/docs/wireless/api/command-resource).
     */
    messagingEnabled?: boolean;
    /**
     * The total data usage (download and upload combined) in Megabytes that the Network allows during one month on non-home networks in the United States. The metering period begins the day of activation and ends on the same day in the following month. Can be up to 2TB.
     */
    nationalRoamingDataLimit?: number;
    /**
     * Whether SIMs can roam on networks other than the home network (T-Mobile USA) in the United States. See [national roaming](https://www.twilio.com/docs/wireless/api/rateplan-resource#national-roaming).
     */
    nationalRoamingEnabled?: boolean;
    /**
     * The unique string that we created to identify the RatePlan resource.
     */
    sid?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * Deprecated. Whether SIMs can make and receive voice calls.
     */
    voiceEnabled?: boolean;
}
