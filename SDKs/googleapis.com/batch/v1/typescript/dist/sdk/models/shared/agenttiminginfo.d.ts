import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VM timing information
 */
export declare class AgentTimingInfo extends SpeakeasyBase {
    /**
     * Agent startup time
     */
    agentStartupTime?: string;
    /**
     * Boot timestamp of the VM OS
     */
    bootTime?: string;
    /**
     * Startup time of the Batch VM script.
     */
    scriptStartupTime?: string;
}
