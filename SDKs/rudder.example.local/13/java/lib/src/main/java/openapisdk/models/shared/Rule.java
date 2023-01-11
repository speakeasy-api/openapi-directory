package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Rule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directives")
    public String[] directives;
    public Rule withDirectives(String[] directives) {
        this.directives = directives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Rule withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public Rule withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Rule withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longDescription")
    public String longDescription;
    public Rule withLongDescription(String longDescription) {
        this.longDescription = longDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public Rule withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system")
    public Boolean system;
    public Rule withSystem(Boolean system) {
        this.system = system;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public RuleTags[] tags;
    public Rule withTags(RuleTags[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public RuleTargets[] targets;
    public Rule withTargets(RuleTargets[] targets) {
        this.targets = targets;
        return this;
    }
}