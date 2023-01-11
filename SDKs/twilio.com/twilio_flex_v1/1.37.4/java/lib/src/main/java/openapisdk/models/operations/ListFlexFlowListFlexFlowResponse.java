package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFlexFlowListFlexFlowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flex_flows")
    public openapisdk.models.shared.FlexV1FlexFlow[] flexFlows;
    public ListFlexFlowListFlexFlowResponse withFlexFlows(openapisdk.models.shared.FlexV1FlexFlow[] flexFlows) {
        this.flexFlows = flexFlows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFlexFlowListFlexFlowResponseMeta meta;
    public ListFlexFlowListFlexFlowResponse withMeta(ListFlexFlowListFlexFlowResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}