import { SpeakeasyBase } from "../../../internal/utils";
import { Routine } from "./routine";
/**
 * Successful response
 */
export declare class ListRoutinesResponse extends SpeakeasyBase {
    /**
     * A token to request the next page of results.
     */
    nextPageToken?: string;
    /**
     * Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language, and remote_function_options.
     */
    routines?: Routine[];
}
