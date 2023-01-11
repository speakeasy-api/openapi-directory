package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfigManagementConfigSync
 * Configuration for Config Sync
**/
public class ConfigManagementConfigSync {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowVerticalScale")
    public Boolean allowVerticalScale;
    public ConfigManagementConfigSync withAllowVerticalScale(Boolean allowVerticalScale) {
        this.allowVerticalScale = allowVerticalScale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public ConfigManagementConfigSync withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public ConfigManagementGitConfig git;
    public ConfigManagementConfigSync withGit(ConfigManagementGitConfig git) {
        this.git = git;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oci")
    public ConfigManagementOciConfig oci;
    public ConfigManagementConfigSync withOci(ConfigManagementOciConfig oci) {
        this.oci = oci;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preventDrift")
    public Boolean preventDrift;
    public ConfigManagementConfigSync withPreventDrift(Boolean preventDrift) {
        this.preventDrift = preventDrift;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceFormat")
    public String sourceFormat;
    public ConfigManagementConfigSync withSourceFormat(String sourceFormat) {
        this.sourceFormat = sourceFormat;
        return this;
    }
}