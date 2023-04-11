import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Task } from "./googlecloudrunv2task";
/**
 * Response message containing a list of Tasks.
 */
export declare class GoogleCloudRunV2ListTasksResponse extends SpeakeasyBase {
    /**
     * A token indicating there are more items than page_size. Use it in the next ListTasks request to continue.
     */
    nextPageToken?: string;
    /**
     * The resulting list of Tasks.
     */
    tasks?: GoogleCloudRunV2Task[];
}
