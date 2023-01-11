package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTensorFlowVersionsResponse
 * Response for ListTensorFlowVersions.
**/
public class ListTensorFlowVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTensorFlowVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tensorflowVersions")
    public TensorFlowVersion[] tensorflowVersions;
    public ListTensorFlowVersionsResponse withTensorflowVersions(TensorFlowVersion[] tensorflowVersions) {
        this.tensorflowVersions = tensorflowVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListTensorFlowVersionsResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}