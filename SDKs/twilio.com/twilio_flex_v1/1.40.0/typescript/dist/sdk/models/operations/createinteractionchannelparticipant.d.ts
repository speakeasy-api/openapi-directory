import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInteractionChannelParticipantServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInteractionChannelParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest extends SpeakeasyBase {
    /**
     * JSON representing the Media Properties for the new Participant.
     */
    mediaProperties: any;
    type: shared.InteractionChannelParticipantEnumTypeEnum;
}
export declare class CreateInteractionChannelParticipantRequest extends SpeakeasyBase {
    /**
     * The Channel Sid for the new Channel Participant.
     */
    channelSid: string;
    /**
     * The Interaction Sid for the new Channel Participant.
     */
    interactionSid: string;
    requestBody?: CreateInteractionChannelParticipantCreateInteractionChannelParticipantRequest;
}
export declare class CreateInteractionChannelParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InteractionInteractionChannelInteractionChannelParticipant?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant;
}
