package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedZoneCloudLoggingConfig
 * Cloud Logging configurations for publicly visible zones.
**/
public class ManagedZoneCloudLoggingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableLogging")
    public Boolean enableLogging;
    public ManagedZoneCloudLoggingConfig withEnableLogging(Boolean enableLogging) {
        this.enableLogging = enableLogging;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZoneCloudLoggingConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
}