import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry } from "./googleclouddialogflowv2beta1environmenthistoryentry";
/**
 * The response message for Environments.GetEnvironmentHistory.
 */
export declare class GoogleCloudDialogflowV2beta1EnvironmentHistory extends SpeakeasyBase {
    /**
     * Output only. The list of agent environments. There will be a maximum number of items returned based on the page_size field in the request.
     */
    entries?: GoogleCloudDialogflowV2beta1EnvironmentHistoryEntry[];
    /**
     * Output only. Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Output only. The name of the environment this history is for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     */
    parent?: string;
}
