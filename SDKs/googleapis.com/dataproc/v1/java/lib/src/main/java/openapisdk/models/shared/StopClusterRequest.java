package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopClusterRequest
 * A request to stop a cluster.
**/
public class StopClusterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterUuid")
    public String clusterUuid;
    public StopClusterRequest withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public StopClusterRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}