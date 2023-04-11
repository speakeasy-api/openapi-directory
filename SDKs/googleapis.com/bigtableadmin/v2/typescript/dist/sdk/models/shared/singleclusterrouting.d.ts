import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.
 */
export declare class SingleClusterRouting extends SpeakeasyBase {
    /**
     * Whether or not `CheckAndMutateRow` and `ReadModifyWriteRow` requests are allowed by this app profile. It is unsafe to send these requests to the same table/row/column in multiple clusters.
     */
    allowTransactionalWrites?: boolean;
    /**
     * The cluster to which read/write requests should be routed.
     */
    clusterId?: string;
}
