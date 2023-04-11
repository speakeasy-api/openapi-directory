import { SpeakeasyBase } from "../../../internal/utils";
import { NodePool } from "./nodepool";
/**
 * A request to repair a cluster.
 */
export declare class RepairClusterRequest extends SpeakeasyBase {
    /**
     * Optional. Specifying the cluster_uuid means the RPC will fail (with error NOT_FOUND) if a cluster with the specified UUID does not exist.
     */
    clusterUuid?: string;
    /**
     * Optional. Timeout for graceful YARN decommissioning. Graceful decommissioning facilitates the removal of cluster nodes without interrupting jobs in progress. The timeout specifies the amount of time to wait for jobs finish before forcefully removing nodes. The default timeout is 0 for forceful decommissioning, and the maximum timeout period is 1 day. (see JSON Mapping—Duration (https://developers.google.com/protocol-buffers/docs/proto3#json)).graceful_decommission_timeout is supported in Dataproc image versions 1.2+.
     */
    gracefulDecommissionTimeout?: string;
    /**
     * Optional. Node pools and corresponding repair action to be taken. All node pools should be unique in this request. i.e. Multiple entries for the same node pool id are not allowed.
     */
    nodePools?: NodePool[];
    /**
     * Optional. operation id of the parent operation sending the repair request
     */
    parentOperationId?: string;
    /**
     * Optional. A unique ID used to identify the request. If the server receives two RepairClusterRequests with the same ID, the second request is ignored, and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters.
     */
    requestId?: string;
}
