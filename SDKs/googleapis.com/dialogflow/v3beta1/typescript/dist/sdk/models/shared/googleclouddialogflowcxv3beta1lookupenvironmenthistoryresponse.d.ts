import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Environment } from "./googleclouddialogflowcxv3beta1environment";
/**
 * The response message for Environments.LookupEnvironmentHistory.
 */
export declare class GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse extends SpeakeasyBase {
    /**
     * Represents a list of snapshots for an environment. Time of the snapshots is stored in `update_time`.
     */
    environments?: GoogleCloudDialogflowCxV3beta1Environment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
