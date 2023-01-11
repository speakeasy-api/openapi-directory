package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EventExtendedProperties
 * Extended properties of the event.
**/
public class EventExtendedProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private")
    public java.util.Map<String, String> private_;
    public EventExtendedProperties withPrivate(java.util.Map<String, String> private_) {
        this.private_ = private_;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared")
    public java.util.Map<String, String> shared;
    public EventExtendedProperties withShared(java.util.Map<String, String> shared) {
        this.shared = shared;
        return this;
    }
}