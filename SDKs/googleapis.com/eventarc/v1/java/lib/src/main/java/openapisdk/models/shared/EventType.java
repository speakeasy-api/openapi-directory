package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventType
 * A representation of the event type resource.
**/
public class EventType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EventType withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventSchemaUri")
    public String eventSchemaUri;
    public EventType withEventSchemaUri(String eventSchemaUri) {
        this.eventSchemaUri = eventSchemaUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filteringAttributes")
    public FilteringAttribute[] filteringAttributes;
    public EventType withFilteringAttributes(FilteringAttribute[] filteringAttributes) {
        this.filteringAttributes = filteringAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public EventType withType(String type) {
        this.type = type;
        return this;
    }
}