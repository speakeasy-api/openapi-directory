import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ContinuousTestResult } from "./googleclouddialogflowcxv3beta1continuoustestresult";
/**
 * The response message for Environments.ListTestCaseResults.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse extends SpeakeasyBase {
    /**
     * The list of continuous test results.
     */
    continuousTestResults?: GoogleCloudDialogflowCxV3beta1ContinuousTestResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
