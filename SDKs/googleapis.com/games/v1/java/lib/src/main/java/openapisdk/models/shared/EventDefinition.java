package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventDefinition
 * An event definition resource.
**/
public class EventDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childEvents")
    public EventChild[] childEvents;
    public EventDefinition withChildEvents(EventChild[] childEvents) {
        this.childEvents = childEvents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EventDefinition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public EventDefinition withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public EventDefinition withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public EventDefinition withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefaultImageUrl")
    public Boolean isDefaultImageUrl;
    public EventDefinition withIsDefaultImageUrl(Boolean isDefaultImageUrl) {
        this.isDefaultImageUrl = isDefaultImageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public EventDefinition withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visibility")
    public EventDefinitionVisibilityEnum visibility;
    public EventDefinition withVisibility(EventDefinitionVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}