import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MeetingsCapability } from "./meetingscapability";
import { MessagesCapability } from "./messagescapability";
import { RtcCapability } from "./rtccapability";
import { VerifyCapability } from "./verifycapability";
import { VoiceCapability } from "./voicecapability";



// Capabilities
/** 
 * Your application can use multiple products. This contains the configuration for each product. This replaces the application `type` from version 1 of the Application API.
**/
export class Capabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meetings" })
  meetings?: MeetingsCapability;

  @SpeakeasyMetadata({ data: "json, name=messages" })
  messages?: MessagesCapability;

  @SpeakeasyMetadata({ data: "json, name=rtc" })
  rtc?: RtcCapability;

  @SpeakeasyMetadata({ data: "json, name=vbc" })
  vbc?: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=verify" })
  verify?: VerifyCapability;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: VoiceCapability;
}
