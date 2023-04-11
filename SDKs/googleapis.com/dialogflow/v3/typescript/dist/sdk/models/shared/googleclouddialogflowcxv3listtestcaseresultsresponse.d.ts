import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCaseResult } from "./googleclouddialogflowcxv3testcaseresult";
/**
 * The response message for TestCases.ListTestCaseResults.
 */
export declare class GoogleCloudDialogflowCxV3ListTestCaseResultsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of test case results.
     */
    testCaseResults?: GoogleCloudDialogflowCxV3TestCaseResult[];
}
