package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResourceUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessControl")
    public ResourceAccessControl accessControl;
    public ResourceUpdate withAccessControl(ResourceAccessControl accessControl) {
        this.accessControl = accessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ResourceUpdateError error;
    public ResourceUpdate withError(ResourceUpdateError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finalProperties")
    public String finalProperties;
    public ResourceUpdate withFinalProperties(String finalProperties) {
        this.finalProperties = finalProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("intent")
    public ResourceUpdateIntentEnum intent;
    public ResourceUpdate withIntent(ResourceUpdateIntentEnum intent) {
        this.intent = intent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifest")
    public String manifest;
    public ResourceUpdate withManifest(String manifest) {
        this.manifest = manifest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public String properties;
    public ResourceUpdate withProperties(String properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ResourceUpdateStateEnum state;
    public ResourceUpdate withState(ResourceUpdateStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public ResourceUpdateWarnings[] warnings;
    public ResourceUpdate withWarnings(ResourceUpdateWarnings[] warnings) {
        this.warnings = warnings;
        return this;
    }
}