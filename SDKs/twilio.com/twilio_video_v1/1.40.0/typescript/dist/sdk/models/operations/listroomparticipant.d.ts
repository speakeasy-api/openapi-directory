import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRoomParticipantServerList: readonly ["https://video.twilio.com"];
export declare class ListRoomParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRoomParticipantRequest extends SpeakeasyBase {
    /**
     * Read only Participants that started after this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only Participants that started before this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
     */
    dateCreatedBefore?: Date;
    /**
     * Read only the Participants with this [User](https://www.twilio.com/docs/chat/rest/user-resource) `identity` value.
     */
    identity?: string;
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
    /**
     * The SID of the room with the Participant resources to read.
     */
    roomSid: string;
    /**
     * Read only the participants with this status. Can be: `connected` or `disconnected`. For `in-progress` Rooms the default Status is `connected`, for `completed` Rooms only `disconnected` Participants are returned.
     */
    status?: shared.RoomParticipantEnumStatusEnum;
}
export declare class ListRoomParticipantListRoomParticipantResponseMeta extends SpeakeasyBase {
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
export declare class ListRoomParticipantListRoomParticipantResponse extends SpeakeasyBase {
    meta?: ListRoomParticipantListRoomParticipantResponseMeta;
    participants?: shared.VideoV1RoomRoomParticipant[];
}
export declare class ListRoomParticipantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRoomParticipantResponse?: ListRoomParticipantListRoomParticipantResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
