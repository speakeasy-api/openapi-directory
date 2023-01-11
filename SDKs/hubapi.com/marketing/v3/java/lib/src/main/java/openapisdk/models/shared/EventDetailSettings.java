package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EventDetailSettings {
    @JsonProperty("appId")
    public Integer appId;
    public EventDetailSettings withAppId(Integer appId) {
        this.appId = appId;
        return this;
    }
    @JsonProperty("eventDetailsUrl")
    public String eventDetailsUrl;
    public EventDetailSettings withEventDetailsUrl(String eventDetailsUrl) {
        this.eventDetailsUrl = eventDetailsUrl;
        return this;
    }
}