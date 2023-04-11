import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicGroupQuery } from "./dynamicgroupquery";
import { DynamicGroupStatus } from "./dynamicgroupstatus";
/**
 * Dynamic group metadata like queries and status.
 */
export declare class DynamicGroupMetadata extends SpeakeasyBase {
    /**
     * Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 100 dynamic groups.
     */
    queries?: DynamicGroupQuery[];
    /**
     * The current status of a dynamic group along with timestamp.
     */
    status?: DynamicGroupStatus;
}
