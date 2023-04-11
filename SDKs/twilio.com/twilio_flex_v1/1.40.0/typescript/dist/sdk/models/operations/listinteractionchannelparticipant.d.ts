import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListInteractionChannelParticipantServerList: readonly ["https://flex-api.twilio.com"];
export declare class ListInteractionChannelParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListInteractionChannelParticipantRequest extends SpeakeasyBase {
    /**
     * The Channel Sid for this Participant.
     */
    channelSid: string;
    /**
     * The Interaction Sid for this channel.
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
export declare class ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta extends SpeakeasyBase {
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
export declare class ListInteractionChannelParticipantListInteractionChannelParticipantResponse extends SpeakeasyBase {
    meta?: ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta;
    participants?: shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant[];
}
export declare class ListInteractionChannelParticipantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listInteractionChannelParticipantResponse?: ListInteractionChannelParticipantListInteractionChannelParticipantResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
