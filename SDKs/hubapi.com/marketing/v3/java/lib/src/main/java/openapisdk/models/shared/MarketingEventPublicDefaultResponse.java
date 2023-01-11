package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MarketingEventPublicDefaultResponse {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public MarketingEventPublicDefaultResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customProperties")
    public PropertyValue[] customProperties;
    public MarketingEventPublicDefaultResponse withCustomProperties(PropertyValue[] customProperties) {
        this.customProperties = customProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDateTime")
    public OffsetDateTime endDateTime;
    public MarketingEventPublicDefaultResponse withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCancelled")
    public Boolean eventCancelled;
    public MarketingEventPublicDefaultResponse withEventCancelled(Boolean eventCancelled) {
        this.eventCancelled = eventCancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventDescription")
    public String eventDescription;
    public MarketingEventPublicDefaultResponse withEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
        return this;
    }
    @JsonProperty("eventName")
    public String eventName;
    public MarketingEventPublicDefaultResponse withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonProperty("eventOrganizer")
    public String eventOrganizer;
    public MarketingEventPublicDefaultResponse withEventOrganizer(String eventOrganizer) {
        this.eventOrganizer = eventOrganizer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public MarketingEventPublicDefaultResponse withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventUrl")
    public String eventUrl;
    public MarketingEventPublicDefaultResponse withEventUrl(String eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public MarketingEventPublicDefaultResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDateTime")
    public OffsetDateTime startDateTime;
    public MarketingEventPublicDefaultResponse withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public MarketingEventPublicDefaultResponse withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}