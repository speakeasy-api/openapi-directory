package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstantiateWorkflowTemplateRequest
 * A request to instantiate a workflow template.
**/
public class InstantiateWorkflowTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public InstantiateWorkflowTemplateRequest withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public InstantiateWorkflowTemplateRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Integer version;
    public InstantiateWorkflowTemplateRequest withVersion(Integer version) {
        this.version = version;
        return this;
    }
}