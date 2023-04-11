import { SpeakeasyBase } from "../../../internal/utils";
import { DriveActivity } from "./driveactivity";
/**
 * Response message for querying Drive activity.
 */
export declare class QueryDriveActivityResponse extends SpeakeasyBase {
    /**
     * List of activity requested.
     */
    activities?: DriveActivity[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
