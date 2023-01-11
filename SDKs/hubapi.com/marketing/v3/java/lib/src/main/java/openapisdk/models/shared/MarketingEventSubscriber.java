package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarketingEventSubscriber {
    @JsonProperty("interactionDateTime")
    public Long interactionDateTime;
    public MarketingEventSubscriber withInteractionDateTime(Long interactionDateTime) {
        this.interactionDateTime = interactionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public MarketingEventSubscriber withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vid")
    public Integer vid;
    public MarketingEventSubscriber withVid(Integer vid) {
        this.vid = vid;
        return this;
    }
}