import { SpeakeasyBase } from "../../../internal/utils";
import { AgentTaskInfo } from "./agenttaskinfo";
/**
 * Agent state.
 */
export declare enum AgentInfoStateEnum {
    AgentStateUnspecified = "AGENT_STATE_UNSPECIFIED",
    AgentStarting = "AGENT_STARTING",
    AgentRunning = "AGENT_RUNNING",
    AgentStopped = "AGENT_STOPPED"
}
/**
 * VM Agent Info.
 */
export declare class AgentInfo extends SpeakeasyBase {
    /**
     * The assigned Job ID
     */
    jobId?: string;
    /**
     * When the AgentInfo is generated.
     */
    reportTime?: string;
    /**
     * Agent state.
     */
    state?: AgentInfoStateEnum;
    /**
     * The assigned task group ID.
     */
    taskGroupId?: string;
    /**
     * Task Info.
     */
    tasks?: AgentTaskInfo[];
}
