import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { Volume } from "./volume";
/**
 * InstanceSpec is a description of an instance.
 */
export declare class InstanceSpec extends SpeakeasyBase {
    /**
     * Optional. Optional duration in seconds the instance may be active relative to StartTime before the system will actively try to mark it failed and kill associated containers. If set to zero, the system will never attempt to kill an instance based on time. Otherwise, value must be a positive integer. +optional
     */
    activeDeadlineSeconds?: string;
    /**
     * Optional. List of containers belonging to the instance. We disallow a number of fields on this Container. Only a single container may be provided.
     */
    containers?: Container[];
    /**
     * Optional. Restart policy for all containers within the instance. Allowed values are: - OnFailure: Instances will always be restarted on failure if the backoffLimit has not been reached. - Never: Instances are never restarted and all failures are permanent. Cannot be used if backoffLimit is set. +optional
     */
    restartPolicy?: string;
    /**
     * Optional. Email address of the IAM service account associated with the instance of a Job. The service account represents the identity of the running instance, and determines what permissions the instance has. If not provided, the instance will use the project's default service account. +optional
     */
    serviceAccountName?: string;
    /**
     * Optional. Optional duration in seconds the instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates delete immediately. The grace period is the duration in seconds after the processes running in the instance are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. +optional
     */
    terminationGracePeriodSeconds?: string;
    /**
     * Optional. List of volumes that can be mounted by containers belonging to the instance. More info: https://kubernetes.io/docs/concepts/storage/volumes +optional
     */
    volumes?: Volume[];
}
