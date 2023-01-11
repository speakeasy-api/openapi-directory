package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class MarketingEventUpdateRequestParams {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customProperties")
    public PropertyValue[] customProperties;
    public MarketingEventUpdateRequestParams withCustomProperties(PropertyValue[] customProperties) {
        this.customProperties = customProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("endDateTime")
    public OffsetDateTime endDateTime;
    public MarketingEventUpdateRequestParams withEndDateTime(OffsetDateTime endDateTime) {
        this.endDateTime = endDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCancelled")
    public Boolean eventCancelled;
    public MarketingEventUpdateRequestParams withEventCancelled(Boolean eventCancelled) {
        this.eventCancelled = eventCancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventDescription")
    public String eventDescription;
    public MarketingEventUpdateRequestParams withEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventName")
    public String eventName;
    public MarketingEventUpdateRequestParams withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventOrganizer")
    public String eventOrganizer;
    public MarketingEventUpdateRequestParams withEventOrganizer(String eventOrganizer) {
        this.eventOrganizer = eventOrganizer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventType")
    public String eventType;
    public MarketingEventUpdateRequestParams withEventType(String eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventUrl")
    public String eventUrl;
    public MarketingEventUpdateRequestParams withEventUrl(String eventUrl) {
        this.eventUrl = eventUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startDateTime")
    public OffsetDateTime startDateTime;
    public MarketingEventUpdateRequestParams withStartDateTime(OffsetDateTime startDateTime) {
        this.startDateTime = startDateTime;
        return this;
    }
}