package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EventSubscriptionsResponseResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public EventSubscriptionsResponseResultMeta meta;
    public EventSubscriptionsResponseResult withMeta(EventSubscriptionsResponseResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public EventSubscriptionsResponseResultResult result;
    public EventSubscriptionsResponseResult withResult(EventSubscriptionsResponseResultResult result) {
        this.result = result;
        return this;
    }
}