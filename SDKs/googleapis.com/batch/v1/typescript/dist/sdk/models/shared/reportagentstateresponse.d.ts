import { SpeakeasyBase } from "../../../internal/utils";
import { AgentTask } from "./agenttask";
/**
 * Response to ReportAgentStateRequest.
 */
export declare class ReportAgentStateResponse extends SpeakeasyBase {
    /**
     * Default report interval override
     */
    defaultReportInterval?: string;
    /**
     * Minimum report interval override
     */
    minReportInterval?: string;
    /**
     * Tasks assigned to the agent
     */
    tasks?: AgentTask[];
}
