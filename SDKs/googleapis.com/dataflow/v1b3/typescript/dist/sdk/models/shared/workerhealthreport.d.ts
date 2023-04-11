import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WorkerHealthReport contains information about the health of a worker. The VM should be identified by the labels attached to the WorkerMessage that this health ping belongs to.
 */
export declare class WorkerHealthReport extends SpeakeasyBase {
    /**
     * Message describing any unusual health reports.
     */
    msg?: string;
    /**
     * The pods running on the worker. See: http://kubernetes.io/v1.1/docs/api-reference/v1/definitions.html#_v1_pod This field is used by the worker to send the status of the indvidual containers running on each worker.
     */
    pods?: Record<string, any>[];
    /**
     * The interval at which the worker is sending health reports. The default value of 0 should be interpreted as the field is not being explicitly set by the worker.
     */
    reportInterval?: string;
    /**
     * Code to describe a specific reason, if known, that a VM has reported broken state.
     */
    vmBrokenCode?: string;
    /**
     * Whether the VM is in a permanently broken state. Broken VMs should be abandoned or deleted ASAP to avoid assigning or completing any work.
     */
    vmIsBroken?: boolean;
    /**
     * Whether the VM is currently healthy.
     */
    vmIsHealthy?: boolean;
    /**
     * The time the VM was booted.
     */
    vmStartupTime?: string;
}
