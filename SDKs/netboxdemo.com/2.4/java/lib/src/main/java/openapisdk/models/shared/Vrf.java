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

public class Vrf {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public Vrf withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public Vrf withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Vrf withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public Vrf withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_unique")
    public Boolean enforceUnique;
    public Vrf withEnforceUnique(Boolean enforceUnique) {
        this.enforceUnique = enforceUnique;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Vrf withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public Vrf withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Vrf withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("rd")
    public String rd;
    public Vrf withRd(String rd) {
        this.rd = rd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Vrf withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public NestedTenant tenant;
    public Vrf withTenant(NestedTenant tenant) {
        this.tenant = tenant;
        return this;
    }
}