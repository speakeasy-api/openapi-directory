package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFlowListFlowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flows")
    public openapisdk.models.shared.StudioV2Flow[] flows;
    public ListFlowListFlowResponse withFlows(openapisdk.models.shared.StudioV2Flow[] flows) {
        this.flows = flows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFlowListFlowResponseMeta meta;
    public ListFlowListFlowResponse withMeta(ListFlowListFlowResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}