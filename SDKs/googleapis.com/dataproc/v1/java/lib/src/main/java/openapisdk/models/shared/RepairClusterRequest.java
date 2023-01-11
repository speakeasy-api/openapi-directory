package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepairClusterRequest
 * A request to repair a cluster.
**/
public class RepairClusterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterUuid")
    public String clusterUuid;
    public RepairClusterRequest withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gracefulDecommissionTimeout")
    public String gracefulDecommissionTimeout;
    public RepairClusterRequest withGracefulDecommissionTimeout(String gracefulDecommissionTimeout) {
        this.gracefulDecommissionTimeout = gracefulDecommissionTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nodePools")
    public NodePool[] nodePools;
    public RepairClusterRequest withNodePools(NodePool[] nodePools) {
        this.nodePools = nodePools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parentOperationId")
    public String parentOperationId;
    public RepairClusterRequest withParentOperationId(String parentOperationId) {
        this.parentOperationId = parentOperationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public RepairClusterRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}