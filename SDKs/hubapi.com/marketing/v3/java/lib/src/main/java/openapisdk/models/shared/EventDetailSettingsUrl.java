package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EventDetailSettingsUrl {
    @JsonProperty("eventDetailsUrl")
    public String eventDetailsUrl;
    public EventDetailSettingsUrl withEventDetailsUrl(String eventDetailsUrl) {
        this.eventDetailsUrl = eventDetailsUrl;
        return this;
    }
}