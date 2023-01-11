package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventListEventResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public openapisdk.models.shared.InsightsV1CallEvent[] events;
    public ListEventListEventResponse withEvents(openapisdk.models.shared.InsightsV1CallEvent[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEventListEventResponseMeta meta;
    public ListEventListEventResponse withMeta(ListEventListEventResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}