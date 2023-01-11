package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QueryRequest
 * Request type for the [`Query`](#google.home.graph.v1.HomeGraphApiService.Query) call.
**/
public class QueryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentUserId")
    public String agentUserId;
    public QueryRequest withAgentUserId(String agentUserId) {
        this.agentUserId = agentUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputs")
    public QueryRequestInput[] inputs;
    public QueryRequest withInputs(QueryRequestInput[] inputs) {
        this.inputs = inputs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public QueryRequest withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
}