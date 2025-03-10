/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ConfigManagementConfigSync - Configuration for Config Sync
 */
public class ConfigManagementConfigSync {
    /**
     * Set to true to allow the vertical scaling. Defaults to false which disallows vertical scaling. This field is deprecated.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowVerticalScale")
    public Boolean allowVerticalScale;

    public ConfigManagementConfigSync withAllowVerticalScale(Boolean allowVerticalScale) {
        this.allowVerticalScale = allowVerticalScale;
        return this;
    }
    
    /**
     * Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of git field.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;

    public ConfigManagementConfigSync withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    
    /**
     * Git repo configuration for a single cluster.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("git")
    public ConfigManagementGitConfig git;

    public ConfigManagementConfigSync withGit(ConfigManagementGitConfig git) {
        this.git = git;
        return this;
    }
    
    /**
     * Configuration for Managed Config Sync.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("managed")
    public ConfigManagementManaged managed;

    public ConfigManagementConfigSync withManaged(ConfigManagementManaged managed) {
        this.managed = managed;
        return this;
    }
    
    /**
     * OCI repo configuration for a single cluster
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oci")
    public ConfigManagementOciConfig oci;

    public ConfigManagementConfigSync withOci(ConfigManagementOciConfig oci) {
        this.oci = oci;
        return this;
    }
    
    /**
     * Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preventDrift")
    public Boolean preventDrift;

    public ConfigManagementConfigSync withPreventDrift(Boolean preventDrift) {
        this.preventDrift = preventDrift;
        return this;
    }
    
    /**
     * Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceFormat")
    public String sourceFormat;

    public ConfigManagementConfigSync withSourceFormat(String sourceFormat) {
        this.sourceFormat = sourceFormat;
        return this;
    }
    
    public ConfigManagementConfigSync(){}
}
