import { SpeakeasyBase } from "../../../internal/utils";
export declare class InstanceGroupManagersSuspendInstancesRequest extends SpeakeasyBase {
    /**
     * If this flag is set to true, the Instance Group Manager will proceed to suspend the instances, skipping initialization on them.
     */
    forceSuspend?: boolean;
    /**
     * The URLs of one or more instances to suspend. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
     */
    instances?: string[];
}
