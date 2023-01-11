package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReimageNodeRequest
 * Request for ReimageNode.
**/
public class ReimageNodeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tensorflowVersion")
    public String tensorflowVersion;
    public ReimageNodeRequest withTensorflowVersion(String tensorflowVersion) {
        this.tensorflowVersion = tensorflowVersion;
        return this;
    }
}