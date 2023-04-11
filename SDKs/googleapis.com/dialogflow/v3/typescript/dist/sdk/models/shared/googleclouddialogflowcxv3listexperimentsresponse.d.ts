import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Experiment } from "./googleclouddialogflowcxv3experiment";
/**
 * The response message for Experiments.ListExperiments.
 */
export declare class GoogleCloudDialogflowCxV3ListExperimentsResponse extends SpeakeasyBase {
    /**
     * The list of experiments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
     */
    experiments?: GoogleCloudDialogflowCxV3Experiment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
