package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SiteOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public SiteOptions withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public String excludes;
    public SiteOptions withExcludes(String excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SiteOptions withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public SiteOptions withScope(String scope) {
        this.scope = scope;
        return this;
    }
}