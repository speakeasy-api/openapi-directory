import { SpeakeasyBase } from "../../../internal/utils";
import { MeetingsCapability } from "./meetingscapability";
import { MessagesCapability } from "./messagescapability";
import { RtcCapability } from "./rtccapability";
import { VerifyCapability } from "./verifycapability";
import { VoiceCapability } from "./voicecapability";
/**
 * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
 */
export declare class Capabilities extends SpeakeasyBase {
    /**
     * Meetings related configuration
     */
    meetings?: MeetingsCapability;
    /**
     * Messages / Dispatch related configuration
     */
    messages?: MessagesCapability;
    /**
     * RTC / Conversation Service related configuration
     */
    rtc?: RtcCapability;
    /**
     * Specify the `vbc` capability to enable zero-rated calls for VBC number programmability service applications. This is always an empty object.
     */
    vbc?: Record<string, any>;
    /**
     * Two factor authentication related configuration
     */
    verify?: VerifyCapability;
    /**
     * Voice related configuration
     */
    voice?: VoiceCapability;
}
