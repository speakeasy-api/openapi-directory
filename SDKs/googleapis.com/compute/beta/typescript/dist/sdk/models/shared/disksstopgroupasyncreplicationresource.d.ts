import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transient resource used in compute.disks.stopGroupAsyncReplication and compute.regionDisks.stopGroupAsyncReplication. It is only used to process requests and is not persisted.
 */
export declare class DisksStopGroupAsyncReplicationResource extends SpeakeasyBase {
    /**
     * The URL of the DiskConsistencyGroupPolicy for the group of disks to stop. This may be a full or partial URL, such as: - https://www.googleapis.com/compute/v1/projects/project/regions/region /resourcePolicies/resourcePolicy - projects/project/regions/region/resourcePolicies/resourcePolicy - regions/region/resourcePolicies/resourcePolicy
     */
    resourcePolicy?: string;
}
