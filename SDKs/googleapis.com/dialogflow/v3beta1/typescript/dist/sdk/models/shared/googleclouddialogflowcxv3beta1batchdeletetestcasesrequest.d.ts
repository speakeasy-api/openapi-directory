import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for TestCases.BatchDeleteTestCases.
 */
export declare class GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest extends SpeakeasyBase {
    /**
     * Required. Format of test case names: `projects//locations/ /agents//testCases/`.
     */
    names?: string[];
}
