import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EnvironmentHistoryEntry } from "./googleclouddialogflowv2environmenthistoryentry";
/**
 * The response message for Environments.GetEnvironmentHistory.
 */
export declare class GoogleCloudDialogflowV2EnvironmentHistory extends SpeakeasyBase {
    /**
     * Output only. The list of agent environments. There will be a maximum number of items returned based on the page_size field in the request.
     */
    entries?: GoogleCloudDialogflowV2EnvironmentHistoryEntry[];
    /**
     * Output only. Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Output only. The name of the environment this history is for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     */
    parent?: string;
}
