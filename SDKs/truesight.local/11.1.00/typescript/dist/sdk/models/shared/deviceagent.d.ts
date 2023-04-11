import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains all information regarding a specific PATROL Agent.
 */
export declare class DeviceAgent extends SpeakeasyBase {
    /**
     * The status of the PATROL Agent's connection.
     */
    connectionStatus?: string;
    /**
     * The ID of the PATROL Agent.
     */
    id?: string;
    /**
     * The FQDN of the PATROL Agent.
     */
    name?: string;
    /**
     * The operating system the PATROL Agent is running on.
     */
    os?: string;
    /**
     * The port the PATROL Agent is running on.
     */
    port?: string;
    /**
     * The link to the 'Monitors' tab of the PATROL Agent.
     */
    url?: string;
    /**
     * The version of the PATROL Agent.
     */
    version?: string;
}
