import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionChannelParticipantEnumTypeEnum } from "./interactionchannelparticipantenumtypeenum";
/**
 * Created
 */
export declare class FlexV1InteractionInteractionChannelInteractionChannelParticipant extends SpeakeasyBase {
    /**
     * The Channel Sid for this Participant.
     */
    channelSid?: string;
    /**
     * The Interaction Sid for this channel.
     */
    interactionSid?: string;
    /**
     * The unique string created by Twilio to identify an Interaction Channel Participant resource.
     */
    sid?: string;
    type?: InteractionChannelParticipantEnumTypeEnum;
    url?: string;
}
