import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for TestCases.BatchRunTestCases.
 */
export declare class GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest extends SpeakeasyBase {
    /**
     * Optional. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`.
     */
    environment?: string;
    /**
     * Required. Format: `projects//locations//agents//testCases/`.
     */
    testCases?: string[];
}
