import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a tool results history resource.
 */
export declare class ToolResultsHistory extends SpeakeasyBase {
    /**
     * Required. A tool results history ID.
     */
    historyId?: string;
    /**
     * Required. The cloud project that owns the tool results history.
     */
    projectId?: string;
}
