package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartClusterRequest
 * A request to start a cluster.
**/
public class StartClusterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterUuid")
    public String clusterUuid;
    public StartClusterRequest withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public StartClusterRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}