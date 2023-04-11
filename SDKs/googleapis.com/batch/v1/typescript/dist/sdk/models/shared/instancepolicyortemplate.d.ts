import { SpeakeasyBase } from "../../../internal/utils";
import { InstancePolicy } from "./instancepolicy";
/**
 * Either an InstancePolicy or an instance template.
 */
export declare class InstancePolicyOrTemplate extends SpeakeasyBase {
    /**
     * Set this field true if users want Batch to help fetch drivers from a third party location and install them for GPUs specified in policy.accelerators or instance_template on their behalf. Default is false.
     */
    installGpuDrivers?: boolean;
    /**
     * Name of an instance template used to create VMs. Named the field as 'instance_template' instead of 'template' to avoid c++ keyword conflict.
     */
    instanceTemplate?: string;
    /**
     * InstancePolicy describes an instance type and resources attached to each VM created by this InstancePolicy.
     */
    policy?: InstancePolicy;
}
