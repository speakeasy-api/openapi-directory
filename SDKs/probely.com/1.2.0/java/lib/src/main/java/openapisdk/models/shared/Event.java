package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Event {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public java.util.Map<String, Object> content;
    public Event withContent(java.util.Map<String, Object> content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event_type")
    public EventTypeEnum eventType;
    public Event withEventType(EventTypeEnum eventType) {
        this.eventType = eventType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Event withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object_type")
    public EventObjectTypeEnum objectType;
    public Event withObjectType(EventObjectTypeEnum objectType) {
        this.objectType = objectType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ocurred_at")
    public OffsetDateTime ocurredAt;
    public Event withOcurredAt(OffsetDateTime ocurredAt) {
        this.ocurredAt = ocurredAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webhooks")
    public Webhook[] webhooks;
    public Event withWebhooks(Webhook[] webhooks) {
        this.webhooks = webhooks;
        return this;
    }
}