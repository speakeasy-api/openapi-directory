import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a tool results step resource. This has the results of a TestExecution.
 */
export declare class ToolResultsStep extends SpeakeasyBase {
    /**
     * Output only. A tool results execution ID.
     */
    executionId?: string;
    /**
     * Output only. A tool results history ID.
     */
    historyId?: string;
    /**
     * Output only. The cloud project that owns the tool results step.
     */
    projectId?: string;
    /**
     * Output only. A tool results step ID.
     */
    stepId?: string;
}
