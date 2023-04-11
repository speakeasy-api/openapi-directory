import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRoomServerList: readonly ["https://video.twilio.com"];
export declare class ListRoomSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRoomRequest extends SpeakeasyBase {
    /**
     * Read only rooms that started on or after this date, given as `YYYY-MM-DD`.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only rooms that started before this date, given as `YYYY-MM-DD`.
     */
    dateCreatedBefore?: Date;
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
     * Read only the rooms with this status. Can be: `in-progress` (default) or `completed`
     */
    status?: shared.RoomEnumRoomStatusEnum;
    /**
     * Read only rooms with the this `unique_name`.
     */
    uniqueName?: string;
}
export declare class ListRoomListRoomResponseMeta extends SpeakeasyBase {
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
export declare class ListRoomListRoomResponse extends SpeakeasyBase {
    meta?: ListRoomListRoomResponseMeta;
    rooms?: shared.VideoV1Room[];
}
export declare class ListRoomResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRoomResponse?: ListRoomListRoomResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
