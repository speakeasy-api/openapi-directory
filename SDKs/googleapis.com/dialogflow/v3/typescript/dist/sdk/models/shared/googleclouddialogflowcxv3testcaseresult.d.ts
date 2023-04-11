import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ConversationTurn, GoogleCloudDialogflowCxV3ConversationTurnInput } from "./googleclouddialogflowcxv3conversationturn";
/**
 * Whether the test case passed in the agent environment.
 */
export declare enum GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum {
    TestResultUnspecified = "TEST_RESULT_UNSPECIFIED",
    Passed = "PASSED",
    Failed = "FAILED"
}
/**
 * Represents a result from running a test case in an agent environment.
 */
export declare class GoogleCloudDialogflowCxV3TestCaseResult extends SpeakeasyBase {
    /**
     * The conversation turns uttered during the test case replay in chronological order.
     */
    conversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];
    /**
     * Environment where the test was run. If not set, it indicates the draft environment.
     */
    environment?: string;
    /**
     * The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`.
     */
    name?: string;
    /**
     * Whether the test case passed in the agent environment.
     */
    testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum;
    /**
     * The time that the test was run.
     */
    testTime?: string;
}
/**
 * Represents a result from running a test case in an agent environment.
 */
export declare class GoogleCloudDialogflowCxV3TestCaseResultInput extends SpeakeasyBase {
    /**
     * The conversation turns uttered during the test case replay in chronological order.
     */
    conversationTurns?: GoogleCloudDialogflowCxV3ConversationTurnInput[];
    /**
     * Environment where the test was run. If not set, it indicates the draft environment.
     */
    environment?: string;
    /**
     * The resource name for the test case result. Format: `projects//locations//agents//testCases/ /results/`.
     */
    name?: string;
    /**
     * Whether the test case passed in the agent environment.
     */
    testResult?: GoogleCloudDialogflowCxV3TestCaseResultTestResultEnum;
    /**
     * The time that the test was run.
     */
    testTime?: string;
}
