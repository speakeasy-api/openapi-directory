package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MarketingEventDefaultResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customProperties")
    public PropertyValue[] customProperties;
    public MarketingEventDefaultResponse withCustomProperties(PropertyValue[] customProperties) {
        this.customProperties = customProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDateTime")
    public OffsetDateTime endDateTime;
    public MarketingEventDefaultResponse withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCancelled")
    public Boolean eventCancelled;
    public MarketingEventDefaultResponse withEventCancelled(Boolean eventCancelled) {
        this.eventCancelled = eventCancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventDescription")
    public String eventDescription;
    public MarketingEventDefaultResponse withEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
        return this;
    }
    @JsonProperty("eventName")
    public String eventName;
    public MarketingEventDefaultResponse withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonProperty("eventOrganizer")
    public String eventOrganizer;
    public MarketingEventDefaultResponse withEventOrganizer(String eventOrganizer) {
        this.eventOrganizer = eventOrganizer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public MarketingEventDefaultResponse withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventUrl")
    public String eventUrl;
    public MarketingEventDefaultResponse withEventUrl(String eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDateTime")
    public OffsetDateTime startDateTime;
    public MarketingEventDefaultResponse withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
}