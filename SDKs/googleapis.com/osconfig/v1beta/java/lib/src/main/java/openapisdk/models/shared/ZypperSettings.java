package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ZypperSettings
 * Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
**/
public class ZypperSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categories")
    public String[] categories;
    public ZypperSettings withCategories(String[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public String[] excludes;
    public ZypperSettings withExcludes(String[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusivePatches")
    public String[] exclusivePatches;
    public ZypperSettings withExclusivePatches(String[] exclusivePatches) {
        this.exclusivePatches = exclusivePatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severities")
    public String[] severities;
    public ZypperSettings withSeverities(String[] severities) {
        this.severities = severities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withOptional")
    public Boolean withOptional;
    public ZypperSettings withWithOptional(Boolean withOptional) {
        this.withOptional = withOptional;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("withUpdate")
    public Boolean withUpdate;
    public ZypperSettings withWithUpdate(Boolean withUpdate) {
        this.withUpdate = withUpdate;
        return this;
    }
}