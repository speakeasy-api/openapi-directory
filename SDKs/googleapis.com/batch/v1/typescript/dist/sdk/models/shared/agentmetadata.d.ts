import { SpeakeasyBase } from "../../../internal/utils";
/**
 * VM Agent Metadata.
 */
export declare class AgentMetadata extends SpeakeasyBase {
    /**
     * When the VM agent started. Use agent_startup_time instead.
     */
    creationTime?: string;
    /**
     * Full name of the entity that created this vm. For MIG, this path is: projects/{project}/regions/{region}/InstanceGroupManagers/{igm} The value is retrieved from the vm metadata key of "created-by".
     */
    creator?: string;
    /**
     * image version for the VM that this agent is installed on.
     */
    imageVersion?: string;
    /**
     * GCP instance name (go/instance-name).
     */
    instance?: string;
    /**
     * GCP instance ID (go/instance-id).
     */
    instanceId?: string;
    /**
     * If the GCP instance has received preemption notice.
     */
    instancePreemptionNoticeReceived?: boolean;
    /**
     * parsed contents of /etc/os-release
     */
    osRelease?: Record<string, string>;
    /**
     * agent binary version running on VM
     */
    version?: string;
    /**
     * Agent zone.
     */
    zone?: string;
}
