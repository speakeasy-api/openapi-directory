import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ContinuousTestResult } from "./googleclouddialogflowcxv3continuoustestresult";
/**
 * The response message for Environments.ListTestCaseResults.
 */
export declare class GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse extends SpeakeasyBase {
    /**
     * The list of continuous test results.
     */
    continuousTestResults?: GoogleCloudDialogflowCxV3ContinuousTestResult[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
