import { SpeakeasyBase } from "../../../internal/utils";
import { AgentInfo } from "./agentinfo";
import { AgentMetadata } from "./agentmetadata";
import { AgentTimingInfo } from "./agenttiminginfo";
/**
 * Request to report agent's state. The Request itself implies the agent is healthy.
 */
export declare class ReportAgentStateRequest extends SpeakeasyBase {
    /**
     * VM Agent Info.
     */
    agentInfo?: AgentInfo;
    /**
     * VM timing information
     */
    agentTimingInfo?: AgentTimingInfo;
    /**
     * VM Agent Metadata.
     */
    metadata?: AgentMetadata;
}
