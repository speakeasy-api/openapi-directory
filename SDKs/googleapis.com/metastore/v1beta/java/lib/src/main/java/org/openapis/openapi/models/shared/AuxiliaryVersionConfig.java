/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AuxiliaryVersionConfig - Configuration information for the auxiliary service versions.
 */
public class AuxiliaryVersionConfig {
    /**
     * A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configOverrides")
    public java.util.Map<String, String> configOverrides;

    public AuxiliaryVersionConfig withConfigOverrides(java.util.Map<String, String> configOverrides) {
        this.configOverrides = configOverrides;
        return this;
    }
    
    /**
     * Network configuration for the Dataproc Metastore service.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NetworkConfig networkConfig;

    public AuxiliaryVersionConfig withNetworkConfig(NetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    
    /**
     * The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;

    public AuxiliaryVersionConfig withVersion(String version) {
        this.version = version;
        return this;
    }
    
    public AuxiliaryVersionConfig(){}
}
