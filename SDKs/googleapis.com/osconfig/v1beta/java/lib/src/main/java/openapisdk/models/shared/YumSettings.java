package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * YumSettings
 * Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
**/
public class YumSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludes")
    public String[] excludes;
    public YumSettings withExcludes(String[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusivePackages")
    public String[] exclusivePackages;
    public YumSettings withExclusivePackages(String[] exclusivePackages) {
        this.exclusivePackages = exclusivePackages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimal")
    public Boolean minimal;
    public YumSettings withMinimal(Boolean minimal) {
        this.minimal = minimal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("security")
    public Boolean security;
    public YumSettings withSecurity(Boolean security) {
        this.security = security;
        return this;
    }
}