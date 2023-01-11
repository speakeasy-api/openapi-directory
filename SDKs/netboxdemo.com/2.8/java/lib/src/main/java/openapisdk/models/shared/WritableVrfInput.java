package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableVrfInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritableVrfInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableVrfInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_unique")
    public Boolean enforceUnique;
    public WritableVrfInput withEnforceUnique(Boolean enforceUnique) {
        this.enforceUnique = enforceUnique;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableVrfInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rd")
    public String rd;
    public WritableVrfInput withRd(String rd) {
        this.rd = rd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableVrfInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritableVrfInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
}