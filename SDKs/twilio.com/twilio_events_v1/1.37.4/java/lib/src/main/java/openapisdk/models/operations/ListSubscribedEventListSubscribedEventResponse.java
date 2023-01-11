package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSubscribedEventListSubscribedEventResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSubscribedEventListSubscribedEventResponseMeta meta;
    public ListSubscribedEventListSubscribedEventResponse withMeta(ListSubscribedEventListSubscribedEventResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent[] types;
    public ListSubscribedEventListSubscribedEventResponse withTypes(openapisdk.models.shared.EventsV1SubscriptionSubscribedEvent[] types) {
        this.types = types;
        return this;
    }
}