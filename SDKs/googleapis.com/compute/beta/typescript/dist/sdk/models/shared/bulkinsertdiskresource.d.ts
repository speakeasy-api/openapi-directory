import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transient resource used in compute.disks.bulkInsert and compute.regionDisks.bulkInsert. It is only used to process requests and is not persisted.
 */
export declare class BulkInsertDiskResource extends SpeakeasyBase {
    /**
     * The URL of the DiskConsistencyGroupPolicy for the group of disks to clone. This may be a full or partial URL, such as: - https://www.googleapis.com/compute/v1/projects/project/regions/region /resourcePolicies/resourcePolicy - projects/project/regions/region/resourcePolicies/resourcePolicy - regions/region/resourcePolicies/resourcePolicy
     */
    sourceConsistencyGroupPolicy?: string;
}
