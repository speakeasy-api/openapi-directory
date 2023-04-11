import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegionInstanceGroupManagersStopInstancesRequest extends SpeakeasyBase {
    /**
     * If this flag is set to true, the Instance Group Manager will proceed to stop the instances, skipping initialization on them.
     */
    forceStop?: boolean;
    /**
     * The URLs of one or more instances to stop. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
     */
    instances?: string[];
}
