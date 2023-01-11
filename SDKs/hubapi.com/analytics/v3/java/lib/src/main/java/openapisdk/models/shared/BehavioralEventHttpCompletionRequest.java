package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BehavioralEventHttpCompletionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public BehavioralEventHttpCompletionRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("eventName")
    public String eventName;
    public BehavioralEventHttpCompletionRequest withEventName(String eventName) {
        this.eventName = eventName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectId")
    public String objectId;
    public BehavioralEventHttpCompletionRequest withObjectId(String objectId) {
        this.objectId = objectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("occurredAt")
    public OffsetDateTime occurredAt;
    public BehavioralEventHttpCompletionRequest withOccurredAt(OffsetDateTime occurredAt) {
        this.occurredAt = occurredAt;
        return this;
    }
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public BehavioralEventHttpCompletionRequest withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("utk")
    public String utk;
    public BehavioralEventHttpCompletionRequest withUtk(String utk) {
        this.utk = utk;
        return this;
    }
}