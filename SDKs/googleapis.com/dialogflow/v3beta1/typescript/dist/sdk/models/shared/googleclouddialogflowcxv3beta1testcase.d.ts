import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ConversationTurn, GoogleCloudDialogflowCxV3beta1ConversationTurnInput } from "./googleclouddialogflowcxv3beta1conversationturn";
import { GoogleCloudDialogflowCxV3beta1TestCaseResult, GoogleCloudDialogflowCxV3beta1TestCaseResultInput } from "./googleclouddialogflowcxv3beta1testcaseresult";
import { GoogleCloudDialogflowCxV3beta1TestConfig } from "./googleclouddialogflowcxv3beta1testconfig";
/**
 * Represents a test case.
 */
export declare class GoogleCloudDialogflowCxV3beta1TestCase extends SpeakeasyBase {
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
    lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResult;
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
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurn[];
    /**
     * Represents configurations for a test case.
     */
    testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
}
/**
 * Represents a test case.
 */
export declare class GoogleCloudDialogflowCxV3beta1TestCaseInput extends SpeakeasyBase {
    /**
     * Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters.
     */
    displayName?: string;
    /**
     * Represents a result from running a test case in an agent environment.
     */
    lastTestResult?: GoogleCloudDialogflowCxV3beta1TestCaseResultInput;
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
    testCaseConversationTurns?: GoogleCloudDialogflowCxV3beta1ConversationTurnInput[];
    /**
     * Represents configurations for a test case.
     */
    testConfig?: GoogleCloudDialogflowCxV3beta1TestConfig;
}
