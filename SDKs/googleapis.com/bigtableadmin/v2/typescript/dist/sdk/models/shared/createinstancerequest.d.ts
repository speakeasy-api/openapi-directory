import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterInput } from "./cluster";
import { InstanceInput } from "./instance";
/**
 * Request message for BigtableInstanceAdmin.CreateInstance.
 */
export declare class CreateInstanceRequestInput extends SpeakeasyBase {
    /**
     * Required. The clusters to be created within the instance, mapped by desired cluster ID, e.g., just `mycluster` rather than `projects/myproject/instances/myinstance/clusters/mycluster`. Fields marked `OutputOnly` must be left blank.
     */
    clusters?: Record<string, ClusterInput>;
    /**
     * A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
     */
    instance?: InstanceInput;
    /**
     * Required. The ID to be used when referring to the new instance within its project, e.g., just `myinstance` rather than `projects/myproject/instances/myinstance`.
     */
    instanceId?: string;
    /**
     * Required. The unique name of the project in which to create the new instance. Values are of the form `projects/{project}`.
     */
    parent?: string;
}
