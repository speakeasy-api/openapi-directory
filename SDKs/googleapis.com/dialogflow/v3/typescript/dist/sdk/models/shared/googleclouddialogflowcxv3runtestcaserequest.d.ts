import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for TestCases.RunTestCase.
 */
export declare class GoogleCloudDialogflowCxV3RunTestCaseRequest extends SpeakeasyBase {
    /**
     * Optional. Environment name. If not set, draft environment is assumed. Format: `projects//locations//agents//environments/`.
     */
    environment?: string;
}
