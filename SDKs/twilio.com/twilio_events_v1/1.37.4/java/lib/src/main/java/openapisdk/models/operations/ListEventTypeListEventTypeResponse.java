package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEventTypeListEventTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListEventTypeListEventTypeResponseMeta meta;
    public ListEventTypeListEventTypeResponse withMeta(ListEventTypeListEventTypeResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("types")
    public openapisdk.models.shared.EventsV1EventType[] types;
    public ListEventTypeListEventTypeResponse withTypes(openapisdk.models.shared.EventsV1EventType[] types) {
        this.types = types;
        return this;
    }
}