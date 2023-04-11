import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Environment } from "./googleclouddialogflowcxv3environment";
/**
 * The response message for Environments.LookupEnvironmentHistory.
 */
export declare class GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse extends SpeakeasyBase {
    /**
     * Represents a list of snapshots for an environment. Time of the snapshots is stored in `update_time`.
     */
    environments?: GoogleCloudDialogflowCxV3Environment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
