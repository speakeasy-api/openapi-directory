package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritablePrefixInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_fields")
    public java.util.Map<String, Object> customFields;
    public WritablePrefixInput withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritablePrefixInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_pool")
    public Boolean isPool;
    public WritablePrefixInput withIsPool(Boolean isPool) {
        this.isPool = isPool;
        return this;
    }
    @JsonProperty("prefix")
    public String prefix;
    public WritablePrefixInput withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("role")
    public Long role;
    public WritablePrefixInput withRole(Long role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public Long site;
    public WritablePrefixInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public WritablePrefixStatusEnum status;
    public WritablePrefixInput withStatus(WritablePrefixStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritablePrefixInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant")
    public Long tenant;
    public WritablePrefixInput withTenant(Long tenant) {
        this.tenant = tenant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan")
    public Long vlan;
    public WritablePrefixInput withVlan(Long vlan) {
        this.vlan = vlan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vrf")
    public Long vrf;
    public WritablePrefixInput withVrf(Long vrf) {
        this.vrf = vrf;
        return this;
    }
}