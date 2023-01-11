package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomEventsBatchInsertRequest
 * Insert Custom Events Request.
**/
public class CustomEventsBatchInsertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customEvents")
    public CustomEvent[] customEvents;
    public CustomEventsBatchInsertRequest withCustomEvents(CustomEvent[] customEvents) {
        this.customEvents = customEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CustomEventsBatchInsertRequest withKind(String kind) {
        this.kind = kind;
        return this;
    }
}