package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventSubscriptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public EventSubscriptionsResponseMeta meta;
    public EventSubscriptionsResponse withMeta(EventSubscriptionsResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public EventSubscriptionsResponseResult result;
    public EventSubscriptionsResponse withResult(EventSubscriptionsResponseResult result) {
        this.result = result;
        return this;
    }
}