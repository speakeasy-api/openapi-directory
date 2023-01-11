package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RollbackInstanceRequest
 * Request for rollbacking a notebook instance
**/
public class RollbackInstanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetSnapshot")
    public String targetSnapshot;
    public RollbackInstanceRequest withTargetSnapshot(String targetSnapshot) {
        this.targetSnapshot = targetSnapshot;
        return this;
    }
}