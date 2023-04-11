import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSimServerList: readonly ["https://wireless.twilio.com"];
export declare class UpdateSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `callback_url`. Can be: `POST` or `GET`. The default is `POST`.
 */
export declare enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `commands_callback_url`. Can be: `POST` or `GET`. The default is `POST`.
 */
export declare enum UpdateSimUpdateSimRequestCommandsCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. Default is `POST`.
 */
export declare enum UpdateSimUpdateSimRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. Default is `POST`.
 */
export declare enum UpdateSimUpdateSimRequestSmsMethodEnum {
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
export declare enum UpdateSimUpdateSimRequestVoiceFallbackMethodEnum {
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
export declare enum UpdateSimUpdateSimRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateSimUpdateSimRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) to which the Sim resource should belong. The Account SID can only be that of the requesting Account or that of a [Subaccount](https://www.twilio.com/docs/iam/api/subaccounts) of the requesting Account. Only valid when the Sim resource's status is `new`. For more information, see the [Move SIMs between Subaccounts documentation](https://www.twilio.com/docs/wireless/api/sim-resource#move-sims-between-subaccounts).
     */
    accountSid?: string;
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `POST` or `GET`. The default is `POST`.
     */
    callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;
    /**
     * The URL we should call using the `callback_url` when the SIM has finished updating. When the SIM transitions from `new` to `ready` or from any status to `deactivated`, we call this URL when the status changes to an intermediate status (`ready` or `deactivated`) and again when the status changes to its final status (`active` or `canceled`).
     */
    callbackUrl?: string;
    /**
     * The HTTP method we should use to call `commands_callback_url`. Can be: `POST` or `GET`. The default is `POST`.
     */
    commandsCallbackMethod?: UpdateSimUpdateSimRequestCommandsCallbackMethodEnum;
    /**
     * The URL we should call using the `commands_callback_method` when the SIM sends a [Command](https://www.twilio.com/docs/wireless/api/command-resource). Your server should respond with an HTTP status code in the 200 range; any response body is ignored.
     */
    commandsCallbackUrl?: string;
    /**
     * A descriptive string that you create to describe the Sim resource. It does not need to be unique.
     */
    friendlyName?: string;
    /**
     * The SID or unique name of the [RatePlan resource](https://www.twilio.com/docs/wireless/api/rateplan-resource) to which the Sim resource should be assigned.
     */
    ratePlan?: string;
    resetStatus?: shared.SimEnumResetStatusEnum;
    /**
     * The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. Default is `POST`.
     */
    smsFallbackMethod?: UpdateSimUpdateSimRequestSmsFallbackMethodEnum;
    /**
     * The URL we should call using the `sms_fallback_method` when an error occurs while retrieving or executing the TwiML requested from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`. Default is `POST`.
     */
    smsMethod?: UpdateSimUpdateSimRequestSmsMethodEnum;
    /**
     * The URL we should call using the `sms_method` when the SIM-connected device sends an SMS message that is not a [Command](https://www.twilio.com/docs/wireless/api/command-resource).
     */
    smsUrl?: string;
    status?: shared.SimEnumStatusEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used in place of the `sid` in the URL path to address the resource.
     */
    uniqueName?: string;
    /**
     * Deprecated.
     */
    voiceFallbackMethod?: UpdateSimUpdateSimRequestVoiceFallbackMethodEnum;
    /**
     * Deprecated.
     */
    voiceFallbackUrl?: string;
    /**
     * Deprecated.
     */
    voiceMethod?: UpdateSimUpdateSimRequestVoiceMethodEnum;
    /**
     * Deprecated.
     */
    voiceUrl?: string;
}
export declare class UpdateSimRequest extends SpeakeasyBase {
    requestBody?: UpdateSimUpdateSimRequest;
    /**
     * The SID or the `unique_name` of the Sim resource to update.
     */
    sid: string;
}
export declare class UpdateSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    wirelessV1Sim?: shared.WirelessV1Sim;
}
