package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VertexAiParameters
 * Parameters used in Vertex AI JobType executions.
**/
public class VertexAiParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("env")
    public java.util.Map<String, String> env;
    public VertexAiParameters withEnv(java.util.Map<String, String> env) {
        this.env = env;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public VertexAiParameters withNetwork(String network) {
        this.network = network;
        return this;
    }
}