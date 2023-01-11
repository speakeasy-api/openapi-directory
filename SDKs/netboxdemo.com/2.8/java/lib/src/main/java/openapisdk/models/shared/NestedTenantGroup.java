package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedTenantGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedTenantGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedTenantGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public NestedTenantGroup withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenant_count")
    public Long tenantCount;
    public NestedTenantGroup withTenantCount(Long tenantCount) {
        this.tenantCount = tenantCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedTenantGroup withUrl(String url) {
        this.url = url;
        return this;
    }
}