import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a tool results execution resource. This has the results of a TestMatrix.
 */
export declare class ToolResultsExecution extends SpeakeasyBase {
    /**
     * Output only. A tool results execution ID.
     */
    executionId?: string;
    /**
     * Output only. A tool results history ID.
     */
    historyId?: string;
    /**
     * Output only. The cloud project that owns the tool results execution.
     */
    projectId?: string;
}
