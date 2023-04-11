import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TestCase } from "./googleclouddialogflowcxv3testcase";
/**
 * The response message for TestCases.ListTestCases.
 */
export declare class GoogleCloudDialogflowCxV3ListTestCasesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of test cases. There will be a maximum number of items returned based on the page_size field in the request.
     */
    testCases?: GoogleCloudDialogflowCxV3TestCase[];
}
