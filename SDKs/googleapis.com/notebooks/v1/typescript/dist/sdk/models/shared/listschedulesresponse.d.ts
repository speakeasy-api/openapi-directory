import { SpeakeasyBase } from "../../../internal/utils";
import { Schedule } from "./schedule";
/**
 * Response for listing scheduled notebook job.
 */
export declare class ListSchedulesResponse extends SpeakeasyBase {
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     */
    nextPageToken?: string;
    /**
     * A list of returned instances.
     */
    schedules?: Schedule[];
    /**
     * Schedules that could not be reached. For example: ['projects/{project_id}/location/{location}/schedules/monthly_digest', 'projects/{project_id}/location/{location}/schedules/weekly_sentiment']
     */
    unreachable?: string[];
}
