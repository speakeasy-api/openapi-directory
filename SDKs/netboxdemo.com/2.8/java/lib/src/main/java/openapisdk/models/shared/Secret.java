package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Secret {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public Secret withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public Secret withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonProperty("device")
    public NestedDevice device;
    public Secret withDevice(NestedDevice device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public Secret withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Secret withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public Secret withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Secret withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("plaintext")
    public String plaintext;
    public Secret withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
    @JsonProperty("role")
    public NestedSecretRole role;
    public Secret withRole(NestedSecretRole role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Secret withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}