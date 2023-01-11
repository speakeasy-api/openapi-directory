package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MarketingEventEmailSubscriber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contactProperties")
    public java.util.Map<String, String> contactProperties;
    public MarketingEventEmailSubscriber withContactProperties(java.util.Map<String, String> contactProperties) {
        this.contactProperties = contactProperties;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public MarketingEventEmailSubscriber withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("interactionDateTime")
    public Long interactionDateTime;
    public MarketingEventEmailSubscriber withInteractionDateTime(Long interactionDateTime) {
        this.interactionDateTime = interactionDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public MarketingEventEmailSubscriber withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
}