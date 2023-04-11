import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInteractionChannelInviteServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInteractionChannelInviteSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInteractionChannelInviteRequest extends SpeakeasyBase {
    /**
     * The Channel SID for this Participant.
     */
    channelSid: string;
    /**
     * The Interaction SID for this Channel.
     */
    interactionSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListInteractionChannelInviteListInteractionChannelInviteResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListInteractionChannelInviteListInteractionChannelInviteResponse extends SpeakeasyBase {
    invites?: shared.FlexV1InteractionInteractionChannelInteractionChannelInvite[];
    meta?: ListInteractionChannelInviteListInteractionChannelInviteResponseMeta;
}
export declare class ListInteractionChannelInviteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInteractionChannelInviteResponse?: ListInteractionChannelInviteListInteractionChannelInviteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
