package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListInteractionListInteractionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interactions")
    public openapisdk.models.shared.ProxyV1ServiceSessionInteraction[] interactions;
    public ListInteractionListInteractionResponse withInteractions(openapisdk.models.shared.ProxyV1ServiceSessionInteraction[] interactions) {
        this.interactions = interactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListInteractionListInteractionResponseMeta meta;
    public ListInteractionListInteractionResponse withMeta(ListInteractionListInteractionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}