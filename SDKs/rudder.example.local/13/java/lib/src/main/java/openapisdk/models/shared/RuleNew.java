package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleNew {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public RuleNew withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directives")
    public String[] directives;
    public RuleNew withDirectives(String[] directives) {
        this.directives = directives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public RuleNew withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public RuleNew withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RuleNew withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longDescription")
    public String longDescription;
    public RuleNew withLongDescription(String longDescription) {
        this.longDescription = longDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public RuleNew withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public RuleNew withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system")
    public Boolean system;
    public RuleNew withSystem(Boolean system) {
        this.system = system;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public RuleNewTags[] tags;
    public RuleNew withTags(RuleNewTags[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public String[] targets;
    public RuleNew withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}