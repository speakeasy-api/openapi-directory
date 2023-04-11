import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAccessConfig, RuntimeAccessConfigInput } from "./runtimeaccessconfig";
import { RuntimeMetrics } from "./runtimemetrics";
import { RuntimeSoftwareConfig, RuntimeSoftwareConfigInput } from "./runtimesoftwareconfig";
import { VirtualMachine, VirtualMachineInput } from "./virtualmachine";
/**
 * The definition of a Runtime for a managed notebook instance.
 */
export declare class RuntimeInput extends SpeakeasyBase {
    /**
     * Specifies the login configuration for Runtime
     */
    accessConfig?: RuntimeAccessConfigInput;
    /**
     * Optional. The labels to associate with this Managed Notebook or Runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    labels?: Record<string, string>;
    /**
     * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
     */
    softwareConfig?: RuntimeSoftwareConfigInput;
    /**
     * Runtime using Virtual Machine for computing.
     */
    virtualMachine?: VirtualMachineInput;
}
/**
 * Output only. Runtime health_state.
 */
export declare enum RuntimeHealthStateEnum {
    HealthStateUnspecified = "HEALTH_STATE_UNSPECIFIED",
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    AgentNotInstalled = "AGENT_NOT_INSTALLED",
    AgentNotRunning = "AGENT_NOT_RUNNING"
}
/**
 * Output only. Runtime state.
 */
export declare enum RuntimeStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Starting = "STARTING",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Deleting = "DELETING",
    Upgrading = "UPGRADING",
    Initializing = "INITIALIZING"
}
/**
 * The definition of a Runtime for a managed notebook instance.
 */
export declare class Runtime extends SpeakeasyBase {
    /**
     * Specifies the login configuration for Runtime
     */
    accessConfig?: RuntimeAccessConfig;
    /**
     * Output only. Runtime creation time.
     */
    createTime?: string;
    /**
     * Output only. Runtime health_state.
     */
    healthState?: RuntimeHealthStateEnum;
    /**
     * Optional. The labels to associate with this Managed Notebook or Runtime. Label **keys** must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be empty, but, if present, must contain 1 to 63 characters, and must conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    labels?: Record<string, string>;
    /**
     * Contains runtime daemon metrics, such as OS and kernels and sessions stats.
     */
    metrics?: RuntimeMetrics;
    /**
     * Output only. The resource name of the runtime. Format: `projects/{project}/locations/{location}/runtimes/{runtimeId}`
     */
    name?: string;
    /**
     * Specifies the selection and configuration of software inside the runtime. The properties to set on runtime. Properties keys are specified in `key:value` format, for example: * `idle_shutdown: true` * `idle_shutdown_timeout: 180` * `enable_health_monitoring: true`
     */
    softwareConfig?: RuntimeSoftwareConfig;
    /**
     * Output only. Runtime state.
     */
    state?: RuntimeStateEnum;
    /**
     * Output only. Runtime update time.
     */
    updateTime?: string;
    /**
     * Runtime using Virtual Machine for computing.
     */
    virtualMachine?: VirtualMachine;
}
