import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateInteractionChannelParticipantServerList: readonly ["https://flex-api.twilio.com"];
export declare class UpdateInteractionChannelParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
    status: shared.InteractionChannelParticipantEnumStatusEnum;
}
export declare class UpdateInteractionChannelParticipantRequest extends SpeakeasyBase {
    /**
     * The Channel Sid for this Participant.
     */
    channelSid: string;
    /**
     * The Interaction Sid for this channel.
     */
    interactionSid: string;
    requestBody?: UpdateInteractionChannelParticipantUpdateInteractionChannelParticipantRequest;
    /**
     * The unique string created by Twilio to identify an Interaction Channel resource.
     */
    sid: string;
}
export declare class UpdateInteractionChannelParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
