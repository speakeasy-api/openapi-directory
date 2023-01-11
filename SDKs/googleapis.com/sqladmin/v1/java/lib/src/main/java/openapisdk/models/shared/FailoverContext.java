package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailoverContext
 * Database instance failover context.
**/
public class FailoverContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public FailoverContext withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settingsVersion")
    public String settingsVersion;
    public FailoverContext withSettingsVersion(String settingsVersion) {
        this.settingsVersion = settingsVersion;
        return this;
    }
}