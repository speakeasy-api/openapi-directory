import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointPhoneFrom } from "./endpointphonefrom";
/**
 * The HTTP method used to send event information to answer_url.
 */
export declare enum CreateCallRequestAnswerUrlAnswerMethodEnum {
    Post = "POST",
    Get = "GET"
}
/**
 * The HTTP method used to send event information to `event_url`.
 */
export declare enum CreateCallRequestAnswerUrlEventMethodEnum {
    Post = "POST",
    Get = "GET"
}
/**
 * Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.
 */
export declare enum CreateCallRequestAnswerUrlMachineDetectionEnum {
    Continue = "continue",
    Hangup = "hangup"
}
export declare class CreateCallRequestAnswerUrl extends SpeakeasyBase {
    /**
     * The HTTP method used to send event information to answer_url.
     */
    answerMethod?: CreateCallRequestAnswerUrlAnswerMethodEnum;
    /**
     * The webhook endpoint where you provide the [Nexmo Call Control Object](/voice/voice-api/ncco-reference) that governs this call.
     *
     * @remarks
     *
     */
    answerUrl: string[];
    /**
     * The HTTP method used to send event information to `event_url`.
     */
    eventMethod?: CreateCallRequestAnswerUrlEventMethodEnum;
    /**
     * **Required** unless `event_url` is configured at the application
     *
     * @remarks
     * level, see [Create an Application](/api/application.v2#createApplication)
     *
     * The webhook endpoint where call progress events are
     * sent to. For more information about the values sent, see
     * [Event webhook](/voice/voice-api/webhook-reference#event-webhook).
     *
     */
    eventUrl?: string[];
    /**
     * Connect to a Phone (PSTN) number
     */
    from: EndpointPhoneFrom;
    /**
     * Set the number of seconds that elapse before Vonage hangs up after the call state changes to answered.
     */
    lengthTimer?: number;
    /**
     * Configure the behavior when Vonage detects that the call is answered by voicemail. If `continue`, Vonage sends an HTTP request to `event_url` with the Call event machine. If `hangup`, Vonage ends the call.
     */
    machineDetection?: CreateCallRequestAnswerUrlMachineDetectionEnum;
    /**
     * Set to `true` to use random phone number as `from`. The number will be selected from the list of the numbers assigned to the current application. `random_from_number: true` cannot be used together with `from`.
     */
    randomFromNumber?: boolean;
    /**
     * Set the number of seconds that elapse before Vonage hangs up after the call state changes to ‘ringing’.
     */
    ringingTimer?: number;
    to: any[];
}
