import { SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";
/**
 * Successful response
 */
export declare class ListSessionsResponse extends SpeakeasyBase {
    /**
     * If includeDeleted is set to true in the request, and startTime and endTime are omitted, this will include sessions which were deleted since the last sync.
     */
    deletedSession?: Session[];
    /**
     * Flag to indicate server has more data to transfer. DO NOT USE THIS FIELD. It is never populated in responses from the server.
     */
    hasMoreData?: boolean;
    /**
     * The sync token which is used to sync further changes. This will only be provided if both startTime and endTime are omitted from the request.
     */
    nextPageToken?: string;
    /**
     * Sessions with an end time that is between startTime and endTime of the request.
     */
    session?: Session[];
}
