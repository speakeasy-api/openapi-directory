package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListMessageInteractionListMessageInteractionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interactions")
    public openapisdk.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction[] interactions;
    public ListMessageInteractionListMessageInteractionResponse withInteractions(openapisdk.models.shared.ProxyV1ServiceSessionParticipantMessageInteraction[] interactions) {
        this.interactions = interactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListMessageInteractionListMessageInteractionResponseMeta meta;
    public ListMessageInteractionListMessageInteractionResponse withMeta(ListMessageInteractionListMessageInteractionResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}