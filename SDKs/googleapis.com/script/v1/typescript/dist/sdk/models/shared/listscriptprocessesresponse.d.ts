import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsScriptTypeProcess } from "./googleappsscripttypeprocess";
/**
 * Response with the list of Process resources.
 */
export declare class ListScriptProcessesResponse extends SpeakeasyBase {
    /**
     * Token for the next page of results. If empty, there are no more pages remaining.
     */
    nextPageToken?: string;
    /**
     * List of processes matching request parameters.
     */
    processes?: GoogleAppsScriptTypeProcess[];
}
