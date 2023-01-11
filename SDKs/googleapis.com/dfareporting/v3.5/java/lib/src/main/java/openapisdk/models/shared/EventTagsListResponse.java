package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventTagsListResponse
 * Event Tag List Response
**/
public class EventTagsListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTags")
    public EventTag[] eventTags;
    public EventTagsListResponse withEventTags(EventTag[] eventTags) {
        this.eventTags = eventTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventTagsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}