package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableSecretInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableSecretInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonProperty("device")
    public Long device;
    public WritableSecretInput withDevice(Long device) {
        this.device = device;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WritableSecretInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("plaintext")
    public String plaintext;
    public WritableSecretInput withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
    @JsonProperty("role")
    public Long role;
    public WritableSecretInput withRole(Long role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableSecretInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}