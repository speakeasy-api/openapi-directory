import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TestCase } from "./googleclouddialogflowcxv3beta1testcase";
/**
 * The response message for TestCases.ListTestCases.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListTestCasesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of test cases. There will be a maximum number of items returned based on the page_size field in the request.
     */
    testCases?: GoogleCloudDialogflowCxV3beta1TestCase[];
}
