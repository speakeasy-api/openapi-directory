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

public class Prefix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public LocalDate created;
    public Prefix withCreated(LocalDate created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public Prefix withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Prefix withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("family")
    public PrefixFamily family;
    public Prefix withFamily(PrefixFamily family) {
        this.family = family;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Prefix withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_pool")
    public Boolean isPool;
    public Prefix withIsPool(Boolean isPool) {
        this.isPool = isPool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_updated")
    public OffsetDateTime lastUpdated;
    public Prefix withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonProperty("prefix")
    public String prefix;
    public Prefix withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public NestedRole role;
    public Prefix withRole(NestedRole role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public NestedSite site;
    public Prefix withSite(NestedSite site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PrefixStatus status;
    public Prefix withStatus(PrefixStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public Prefix withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public NestedTenant tenant;
    public Prefix withTenant(NestedTenant tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public NestedVlan vlan;
    public Prefix withVlan(NestedVlan vlan) {
        this.vlan = vlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf")
    public NestedVrf vrf;
    public Prefix withVrf(NestedVrf vrf) {
        this.vrf = vrf;
        return this;
    }
}