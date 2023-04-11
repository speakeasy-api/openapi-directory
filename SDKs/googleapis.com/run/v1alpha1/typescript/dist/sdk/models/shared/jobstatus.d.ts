import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceStatus } from "./instancestatus";
import { JobCondition } from "./jobcondition";
/**
 * JobStatus represents the current state of a Job.
 */
export declare class JobStatus extends SpeakeasyBase {
    /**
     * Optional. The number of actively running instances. +optional
     */
    active?: number;
    /**
     * Optional. Represents time when the job was completed. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    completionTime?: string;
    /**
     * Optional. The latest available observations of a job's current state. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/ +optional
     */
    conditions?: JobCondition[];
    /**
     * Optional. The number of instances which reached phase Failed. +optional
     */
    failed?: number;
    /**
     * Optional. ImageDigest holds the resolved digest for the image specified within .Spec.Template.Spec.Container.Image. The digest is resolved during the creation of the Job. This field holds the digest value regardless of whether a tag or digest was originally specified in the Container object.
     */
    imageDigest?: string;
    /**
     * Optional. Status of completed, failed, and running instances. +optional
     */
    instances?: InstanceStatus[];
    /**
     * Optional. The 'generation' of the job that was last processed by the controller.
     */
    observedGeneration?: number;
    /**
     * Optional. Represents time when the job was acknowledged by the job controller. It is not guaranteed to be set in happens-before order across separate operations. It is represented in RFC3339 form and is in UTC. +optional
     */
    startTime?: string;
    /**
     * Optional. The number of instances which reached phase Succeeded. +optional
     */
    succeeded?: number;
}
