package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class SubscriptionDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("communicationMethod")
    public String communicationMethod;
    public SubscriptionDefinition withCommunicationMethod(String communicationMethod) {
        this.communicationMethod = communicationMethod;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public SubscriptionDefinition withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public SubscriptionDefinition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public SubscriptionDefinition withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("isActive")
    public Boolean isActive;
    public SubscriptionDefinition withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonProperty("isDefault")
    public Boolean isDefault;
    public SubscriptionDefinition withIsDefault(Boolean isDefault) {
        this.isDefault = isDefault;
        return this;
    }
    @JsonProperty("isInternal")
    public Boolean isInternal;
    public SubscriptionDefinition withIsInternal(Boolean isInternal) {
        this.isInternal = isInternal;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SubscriptionDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purpose")
    public String purpose;
    public SubscriptionDefinition withPurpose(String purpose) {
        this.purpose = purpose;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public SubscriptionDefinition withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}