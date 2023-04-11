import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateInteractionChannelInviteServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateInteractionChannelInviteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateInteractionChannelInviteCreateInteractionChannelInviteRequest extends SpeakeasyBase {
    /**
     * The Interaction's routing logic.
     */
    routing: any;
}
export declare class CreateInteractionChannelInviteRequest extends SpeakeasyBase {
    /**
     * The Channel SID for this Invite.
     */
    channelSid: string;
    /**
     * The Interaction SID for this Channel.
     */
    interactionSid: string;
    requestBody?: CreateInteractionChannelInviteCreateInteractionChannelInviteRequest;
}
export declare class CreateInteractionChannelInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1InteractionInteractionChannelInteractionChannelInvite?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite;
}
