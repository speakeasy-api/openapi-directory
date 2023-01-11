package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RpcResponse
 * Object containing the JSON response from the Neblio node.
**/
public class RpcResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public java.util.Map<String, Object> error;
    public RpcResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RpcResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public java.util.Map<String, Object> result;
    public RpcResponse withResult(java.util.Map<String, Object> result) {
        this.result = result;
        return this;
    }
}