package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DirectiveNew {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public DirectiveNew withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public DirectiveNew withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DirectiveNew withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longDescription")
    public String longDescription;
    public DirectiveNew withLongDescription(String longDescription) {
        this.longDescription = longDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, Object> parameters;
    public DirectiveNew withParameters(java.util.Map<String, Object> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Long priority;
    public DirectiveNew withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortDescription")
    public String shortDescription;
    public DirectiveNew withShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public DirectiveNew withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("system")
    public Boolean system;
    public DirectiveNew withSystem(Boolean system) {
        this.system = system;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public DirectiveNewTags[] tags;
    public DirectiveNew withTags(DirectiveNewTags[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("techniqueName")
    public String techniqueName;
    public DirectiveNew withTechniqueName(String techniqueName) {
        this.techniqueName = techniqueName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("techniqueVersion")
    public String techniqueVersion;
    public DirectiveNew withTechniqueVersion(String techniqueVersion) {
        this.techniqueVersion = techniqueVersion;
        return this;
    }
}