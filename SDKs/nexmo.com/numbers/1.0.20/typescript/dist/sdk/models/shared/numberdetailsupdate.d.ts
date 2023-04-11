import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
 *
 * @remarks
 *
 * Specifies the Messages webhook type (always `app`) associated with this
 * number and must be used with the `messagesCallbackValue` parameter.
 *
 */
export declare enum NumberDetailsUpdateMessagesCallbackTypeEnum {
    App = "app"
}
/**
 * Specify whether inbound voice calls on your number are forwarded
 *
 * @remarks
 * to a SIP or a telephone number.  This must be used with the
 * `voiceCallbackValue` parameter. If set, `sip` or `tel` are
 * prioritized over the Voice capability in your Application.
 *
 * *Note: The `app` value is deprecated and will be removed in future.*
 *
 */
export declare enum NumberDetailsUpdateVoiceCallbackTypeEnum {
    Sip = "sip",
    Tel = "tel",
    App = "app"
}
/**
 * Number details
 */
export declare class NumberDetailsUpdate extends SpeakeasyBase {
    /**
     * The Application that will handle inbound traffic to this number.
     */
    appId?: string;
    /**
     * The two character country code in ISO 3166-1 alpha-2 format
     */
    country: string;
    /**
     * <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
     *
     * @remarks
     *
     * Specifies the Messages webhook type (always `app`) associated with this
     * number and must be used with the `messagesCallbackValue` parameter.
     *
     */
    messagesCallbackType?: NumberDetailsUpdateMessagesCallbackTypeEnum;
    /**
     * <strong>DEPRECATED</strong> - We recommend that you use `app_id` instead.
     *
     * @remarks
     *
     * Specifies the Application ID of your Messages application.
     * It must be used with the `messagesCallbackType` parameter.
     *
     */
    messagesCallbackValue?: string;
    /**
     * An URL-encoded URI to the webhook endpoint that handles inbound messages. Your webhook endpoint must be active before you make this request. Vonage makes a `GET` request to the endpoint and checks that it returns a `200 OK` response. Set this parameter's value to an empty string to remove the webhook.
     */
    moHttpUrl?: string;
    /**
     * The associated system type for your SMPP client
     */
    moSmppSysType?: string;
    /**
     * An available inbound virtual number.
     */
    msisdn: string;
    /**
     * Specify whether inbound voice calls on your number are forwarded
     *
     * @remarks
     * to a SIP or a telephone number.  This must be used with the
     * `voiceCallbackValue` parameter. If set, `sip` or `tel` are
     * prioritized over the Voice capability in your Application.
     *
     * *Note: The `app` value is deprecated and will be removed in future.*
     *
     */
    voiceCallbackType?: NumberDetailsUpdateVoiceCallbackTypeEnum;
    /**
     * A SIP URI or telephone number. Must be used with the `voiceCallbackType` parameter.
     */
    voiceCallbackValue?: string;
    /**
     * A webhook URI for Vonage to send a request to when a call ends
     */
    voiceStatusCallback?: string;
}
