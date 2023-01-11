package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceMeshAnalysisMessage
 * AnalysisMessage is a single message produced by an analyzer, and it used to communicate to the end user about the state of their Service Mesh configuration.
**/
public class ServiceMeshAnalysisMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public java.util.Map<String, Object> args;
    public ServiceMeshAnalysisMessage withArgs(java.util.Map<String, Object> args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServiceMeshAnalysisMessage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageBase")
    public ServiceMeshAnalysisMessageBase messageBase;
    public ServiceMeshAnalysisMessage withMessageBase(ServiceMeshAnalysisMessageBase messageBase) {
        this.messageBase = messageBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourcePaths")
    public String[] resourcePaths;
    public ServiceMeshAnalysisMessage withResourcePaths(String[] resourcePaths) {
        this.resourcePaths = resourcePaths;
        return this;
    }
}