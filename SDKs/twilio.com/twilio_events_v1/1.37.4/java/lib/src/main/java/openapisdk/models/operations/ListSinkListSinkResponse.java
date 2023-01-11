package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSinkListSinkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListSinkListSinkResponseMeta meta;
    public ListSinkListSinkResponse withMeta(ListSinkListSinkResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sinks")
    public openapisdk.models.shared.EventsV1Sink[] sinks;
    public ListSinkListSinkResponse withSinks(openapisdk.models.shared.EventsV1Sink[] sinks) {
        this.sinks = sinks;
        return this;
    }
}