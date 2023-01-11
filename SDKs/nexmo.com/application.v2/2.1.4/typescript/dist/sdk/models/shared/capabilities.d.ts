import { SpeakeasyBase } from "../../../internal/utils";
import { MeetingsCapability } from "./meetingscapability";
import { MessagesCapability } from "./messagescapability";
import { RtcCapability } from "./rtccapability";
import { VerifyCapability } from "./verifycapability";
import { VoiceCapability } from "./voicecapability";
/**
 * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
**/
export declare class Capabilities extends SpeakeasyBase {
    meetings?: MeetingsCapability;
    messages?: MessagesCapability;
    rtc?: RtcCapability;
    vbc?: Record<string, any>;
    verify?: VerifyCapability;
    voice?: VoiceCapability;
}
