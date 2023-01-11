package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AptSettings
 * Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
**/
public class AptSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public String[] excludes;
    public AptSettings withExcludes(String[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusivePackages")
    public String[] exclusivePackages;
    public AptSettings withExclusivePackages(String[] exclusivePackages) {
        this.exclusivePackages = exclusivePackages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AptSettingsTypeEnum type;
    public AptSettings withType(AptSettingsTypeEnum type) {
        this.type = type;
        return this;
    }
}