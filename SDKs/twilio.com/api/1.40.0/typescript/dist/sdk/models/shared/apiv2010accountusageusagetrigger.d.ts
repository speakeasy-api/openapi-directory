import { SpeakeasyBase } from "../../../internal/utils";
import { UsageTriggerEnumRecurringEnum } from "./usagetriggerenumrecurringenum";
import { UsageTriggerEnumTriggerFieldEnum } from "./usagetriggerenumtriggerfieldenum";
import { UsageTriggerEnumUsageCategoryEnum } from "./usagetriggerenumusagecategoryenum";
/**
 * The HTTP method we use to call `callback_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountUsageUsageTriggerCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Created
 */
export declare class ApiV2010AccountUsageUsageTrigger extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that the trigger monitors.
     */
    accountSid?: string;
    /**
     * The API version used to create the resource.
     */
    apiVersion?: string;
    /**
     * The HTTP method we use to call `callback_url`. Can be: `GET` or `POST`.
     */
    callbackMethod?: ApiV2010AccountUsageUsageTriggerCallbackMethodEnum;
    /**
     * The URL we call using the `callback_method` when the trigger fires.
     */
    callbackUrl?: string;
    /**
     * The current value of the field the trigger is watching.
     */
    currentValue?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the trigger was last fired specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateFired?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The string that you assigned to describe the trigger.
     */
    friendlyName?: string;
    recurring?: UsageTriggerEnumRecurringEnum;
    /**
     * The unique string that that we created to identify the UsageTrigger resource.
     */
    sid?: string;
    triggerBy?: UsageTriggerEnumTriggerFieldEnum;
    /**
     * The value at which the trigger will fire.  Must be a positive, numeric value.
     */
    triggerValue?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
    usageCategory?: UsageTriggerEnumUsageCategoryEnum;
    /**
     * The URI of the [UsageRecord](https://www.twilio.com/docs/usage/api/usage-record) resource this trigger watches, relative to `https://api.twilio.com`.
     */
    usageRecordUri?: string;
}
