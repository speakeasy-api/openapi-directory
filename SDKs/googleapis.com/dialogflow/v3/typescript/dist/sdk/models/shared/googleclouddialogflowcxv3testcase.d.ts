import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ConversationTurn, GoogleCloudDialogflowCxV3ConversationTurnInput } from "./googleclouddialogflowcxv3conversationturn";
import { GoogleCloudDialogflowCxV3TestCaseResult, GoogleCloudDialogflowCxV3TestCaseResultInput } from "./googleclouddialogflowcxv3testcaseresult";
import { GoogleCloudDialogflowCxV3TestConfig } from "./googleclouddialogflowcxv3testconfig";
/**
 * Represents a test case.
 */
export declare class GoogleCloudDialogflowCxV3TestCase extends SpeakeasyBase {
    /**
     * Output only. When the test was created.
     */
    creationTime?: string;
    /**
     * Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.
     */
    displayName?: string;
    /**
     * Represents a result from running a test case in an agent environment.
     */
    lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResult;
    /**
     * The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`.
     */
    name?: string;
    /**
     * Additional freeform notes about the test case. Limit of 400 characters.
     */
    notes?: string;
    /**
     * Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters.
     */
    tags?: string[];
    /**
     * The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
     */
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3ConversationTurn[];
    /**
     * Represents configurations for a test case.
     */
    testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}
/**
 * Represents a test case.
 */
export declare class GoogleCloudDialogflowCxV3TestCaseInput extends SpeakeasyBase {
    /**
     * Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.
     */
    displayName?: string;
    /**
     * Represents a result from running a test case in an agent environment.
     */
    lastTestResult?: GoogleCloudDialogflowCxV3TestCaseResultInput;
    /**
     * The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents/ /testCases/`.
     */
    name?: string;
    /**
     * Additional freeform notes about the test case. Limit of 400 characters.
     */
    notes?: string;
    /**
     * Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with "#" and has a limit of 30 characters.
     */
    tags?: string[];
    /**
     * The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly.
     */
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3ConversationTurnInput[];
    /**
     * Represents configurations for a test case.
     */
    testConfig?: GoogleCloudDialogflowCxV3TestConfig;
}
