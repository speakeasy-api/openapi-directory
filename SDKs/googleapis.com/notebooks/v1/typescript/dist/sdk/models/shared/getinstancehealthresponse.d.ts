import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Runtime health_state.
 */
export declare enum GetInstanceHealthResponseHealthStateEnum {
    HealthStateUnspecified = "HEALTH_STATE_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    AgentNotInstalled = "AGENT_NOT_INSTALLED",
    AgentNotRunning = "AGENT_NOT_RUNNING"
}
/**
 * Response for checking if a notebook instance is healthy.
 */
export declare class GetInstanceHealthResponse extends SpeakeasyBase {
    /**
     * Output only. Additional information about instance health. Example: healthInfo": { "docker_proxy_agent_status": "1", "docker_status": "1", "jupyterlab_api_status": "-1", "jupyterlab_status": "-1", "updated": "2020-10-18 09:40:03.573409" }
     */
    healthInfo?: Record<string, string>;
    /**
     * Output only. Runtime health_state.
     */
    healthState?: GetInstanceHealthResponseHealthStateEnum;
}
