package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MarketingEventPublicReadResponse {
    @JsonProperty("attendees")
    public Integer attendees;
    public MarketingEventPublicReadResponse withAttendees(Integer attendees) {
        this.attendees = attendees;
        return this;
    }
    @JsonProperty("cancellations")
    public Integer cancellations;
    public MarketingEventPublicReadResponse withCancellations(Integer cancellations) {
        this.cancellations = cancellations;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public MarketingEventPublicReadResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customProperties")
    public PropertyValue[] customProperties;
    public MarketingEventPublicReadResponse withCustomProperties(PropertyValue[] customProperties) {
        this.customProperties = customProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDateTime")
    public OffsetDateTime endDateTime;
    public MarketingEventPublicReadResponse withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCancelled")
    public Boolean eventCancelled;
    public MarketingEventPublicReadResponse withEventCancelled(Boolean eventCancelled) {
        this.eventCancelled = eventCancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventDescription")
    public String eventDescription;
    public MarketingEventPublicReadResponse withEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
        return this;
    }
    @JsonProperty("eventName")
    public String eventName;
    public MarketingEventPublicReadResponse withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonProperty("eventOrganizer")
    public String eventOrganizer;
    public MarketingEventPublicReadResponse withEventOrganizer(String eventOrganizer) {
        this.eventOrganizer = eventOrganizer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public MarketingEventPublicReadResponse withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventUrl")
    public String eventUrl;
    public MarketingEventPublicReadResponse withEventUrl(String eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonProperty("externalEventId")
    public String externalEventId;
    public MarketingEventPublicReadResponse withExternalEventId(String externalEventId) {
        this.externalEventId = externalEventId;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public MarketingEventPublicReadResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("noShows")
    public Integer noShows;
    public MarketingEventPublicReadResponse withNoShows(Integer noShows) {
        this.noShows = noShows;
        return this;
    }
    @JsonProperty("registrants")
    public Integer registrants;
    public MarketingEventPublicReadResponse withRegistrants(Integer registrants) {
        this.registrants = registrants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDateTime")
    public OffsetDateTime startDateTime;
    public MarketingEventPublicReadResponse withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public MarketingEventPublicReadResponse withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}