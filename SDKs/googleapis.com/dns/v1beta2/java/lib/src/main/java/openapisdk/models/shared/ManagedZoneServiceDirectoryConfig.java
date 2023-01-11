package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedZoneServiceDirectoryConfig
 * Contains information about Service Directory-backed zones.
**/
public class ManagedZoneServiceDirectoryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ManagedZoneServiceDirectoryConfig withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespace")
    public ManagedZoneServiceDirectoryConfigNamespace namespace;
    public ManagedZoneServiceDirectoryConfig withNamespace(ManagedZoneServiceDirectoryConfigNamespace namespace) {
        this.namespace = namespace;
        return this;
    }
}