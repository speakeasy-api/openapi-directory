import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { From } from "./from";
import { To } from "./to";
export declare class GetCallResponseLinksSelf extends SpeakeasyBase {
    href?: string;
}
export declare class GetCallResponseLinks extends SpeakeasyBase {
    self?: GetCallResponseLinksSelf;
}
/**
 * Ok
 */
export declare class GetCallResponse extends SpeakeasyBase {
    links?: GetCallResponseLinks;
    /**
     * The unique identifier for the conversation this call leg is part of.
     */
    conversationUuid?: string;
    /**
     * Possible values are `outbound` or `inbound`
     */
    direction?: DirectionEnum;
    /**
     * The time elapsed for the call to take place in seconds. This is only sent if `status` is `completed`.
     */
    duration?: string;
    /**
     * The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For xample, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.
     */
    endTime?: string;
    /**
     * The endpoint you called from. Possible values are the same as `to`.
     */
    from?: From;
    /**
     * The Mobile Country Code Mobile Network Code ([MCCMNC](https://en.wikipedia.org/wiki/Mobile_country_code)) for the carrier network used to make this call. This is only sent if `status` is `completed`.
     */
    network?: string;
    /**
     * The total price charged for this call. This is only sent if `status` is `completed`.
     */
    price?: string;
    /**
     * The price per minute for this call. This is only sent if `status` is `completed`.
     */
    rate?: string;
    /**
     * The time the call started in the following format: `YYYY-MM-DD HH:MM:SS`. For example, `2020-01-01 12:00:00`. This is only sent if `status` is `completed`.
     */
    startTime?: string;
    /**
     * The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects)
     */
    status?: string;
    /**
     * The single or mixed collection of endpoint types you connected to
     */
    to?: To;
    /**
     * The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls
     */
    uuid?: string;
}
