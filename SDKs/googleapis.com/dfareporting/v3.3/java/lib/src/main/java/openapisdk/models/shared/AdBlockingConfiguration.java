package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdBlockingConfiguration
 * Campaign ad blocking settings.
**/
public class AdBlockingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrl")
    public String clickThroughUrl;
    public AdBlockingConfiguration withClickThroughUrl(String clickThroughUrl) {
        this.clickThroughUrl = clickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeBundleId")
    public String creativeBundleId;
    public AdBlockingConfiguration withCreativeBundleId(String creativeBundleId) {
        this.creativeBundleId = creativeBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public AdBlockingConfiguration withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overrideClickThroughUrl")
    public Boolean overrideClickThroughUrl;
    public AdBlockingConfiguration withOverrideClickThroughUrl(Boolean overrideClickThroughUrl) {
        this.overrideClickThroughUrl = overrideClickThroughUrl;
        return this;
    }
}