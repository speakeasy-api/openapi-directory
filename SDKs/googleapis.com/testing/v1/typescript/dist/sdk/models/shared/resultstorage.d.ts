import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudStorage } from "./googlecloudstorage";
import { ToolResultsExecution } from "./toolresultsexecution";
import { ToolResultsHistory } from "./toolresultshistory";
/**
 * Locations where the results of running the test are stored.
 */
export declare class ResultStorage extends SpeakeasyBase {
    /**
     * A storage location within Google cloud storage (GCS).
     */
    googleCloudStorage?: GoogleCloudStorage;
    /**
     * Output only. URL to the results in the Firebase Web Console.
     */
    resultsUrl?: string;
    /**
     * Represents a tool results execution resource. This has the results of a TestMatrix.
     */
    toolResultsExecution?: ToolResultsExecution;
    /**
     * Represents a tool results history resource.
     */
    toolResultsHistory?: ToolResultsHistory;
}
