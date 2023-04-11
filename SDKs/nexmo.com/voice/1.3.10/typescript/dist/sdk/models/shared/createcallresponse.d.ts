import { SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
/**
 * Created
 */
export declare class CreateCallResponse extends SpeakeasyBase {
    /**
     * The unique identifier for the conversation this call leg is part of.
     */
    conversationUuid?: string;
    /**
     * Possible values are `outbound` or `inbound`
     */
    direction?: DirectionEnum;
    /**
     * The status of the call. [See possible values](https://developer.nexmo.com/voice/voice-api/guides/call-flow#event-objects)
     */
    status?: string;
    /**
     * The unique identifier for this call leg. The UUID is created when your call request is accepted by Vonage. You use the UUID in all requests for individual live calls
     */
    uuid?: string;
}
