package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleWithCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public String category;
    public RuleWithCategory withCategory(String category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directives")
    public String[] directives;
    public RuleWithCategory withDirectives(String[] directives) {
        this.directives = directives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public RuleWithCategory withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public RuleWithCategory withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RuleWithCategory withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longDescription")
    public String longDescription;
    public RuleWithCategory withLongDescription(String longDescription) {
        this.longDescription = longDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public RuleWithCategory withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system")
    public Boolean system;
    public RuleWithCategory withSystem(Boolean system) {
        this.system = system;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public RuleWithCategoryTags[] tags;
    public RuleWithCategory withTags(RuleWithCategoryTags[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public String[] targets;
    public RuleWithCategory withTargets(String[] targets) {
        this.targets = targets;
        return this;
    }
}