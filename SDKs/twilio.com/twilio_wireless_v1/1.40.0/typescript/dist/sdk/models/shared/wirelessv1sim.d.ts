import { SpeakeasyBase } from "../../../internal/utils";
import { SimEnumResetStatusEnum } from "./simenumresetstatusenum";
import { SimEnumStatusEnum } from "./simenumstatusenum";
/**
 * The HTTP method we use to call `commands_callback_url`.  Can be: `POST` or `GET`. Default is `POST`.
 */
export declare enum WirelessV1SimCommandsCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Deprecated.
 */
export declare enum WirelessV1SimSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Deprecated.
 */
export declare enum WirelessV1SimSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Deprecated. The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. Default is `POST`.
 */
export declare enum WirelessV1SimVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Deprecated. The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. Default is `POST`.
 */
export declare enum WirelessV1SimVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * OK
 */
export declare class WirelessV1Sim extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) to which the Sim resource belongs.
     */
    accountSid?: string;
    /**
     * The HTTP method we use to call `commands_callback_url`.  Can be: `POST` or `GET`. Default is `POST`.
     */
    commandsCallbackMethod?: WirelessV1SimCommandsCallbackMethodEnum;
    /**
     * The URL we call using the `commands_callback_method` when the SIM originates a machine-to-machine [Command](https://www.twilio.com/docs/wireless/api/command-resource). Your server should respond with an HTTP status code in the 200 range; any response body will be ignored.
     */
    commandsCallbackUrl?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the Sim resource was last updated specified in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format.
     */
    dateUpdated?: Date;
    /**
     * Deprecated.
     */
    eId?: string;
    /**
     * The string that you assigned to describe the Sim resource.
     */
    friendlyName?: string;
    /**
     * The [ICCID](https://en.wikipedia.org/wiki/SIM_card#ICCID) associated with the SIM.
     */
    iccid?: string;
    /**
     * Deprecated.
     */
    ipAddress?: string;
    /**
     * The URLs of related subresources.
     */
    links?: Record<string, any>;
    /**
     * The SID of the [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource) to which the Sim resource is assigned.
     */
    ratePlanSid?: string;
    resetStatus?: SimEnumResetStatusEnum;
    /**
     * The unique string that we created to identify the Sim resource.
     */
    sid?: string;
    /**
     * Deprecated.
     */
    smsFallbackMethod?: WirelessV1SimSmsFallbackMethodEnum;
    /**
     * Deprecated.
     */
    smsFallbackUrl?: string;
    /**
     * Deprecated.
     */
    smsMethod?: WirelessV1SimSmsMethodEnum;
    /**
     * Deprecated.
     */
    smsUrl?: string;
    status?: SimEnumStatusEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the resource's `sid` in the URL to address the resource.
     */
    uniqueName?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * Deprecated. The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`. Default is `POST`.
     */
    voiceFallbackMethod?: WirelessV1SimVoiceFallbackMethodEnum;
    /**
     * Deprecated. The URL we call using the `voice_fallback_method` when an error occurs while retrieving or executing the TwiML requested from `voice_url`.
     */
    voiceFallbackUrl?: string;
    /**
     * Deprecated. The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`. Default is `POST`.
     */
    voiceMethod?: WirelessV1SimVoiceMethodEnum;
    /**
     * Deprecated. The URL we call using the `voice_method` when the SIM-connected device makes a voice call.
     */
    voiceUrl?: string;
}
