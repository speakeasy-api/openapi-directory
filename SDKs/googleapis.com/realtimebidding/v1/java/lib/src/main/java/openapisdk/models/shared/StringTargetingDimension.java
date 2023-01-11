package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StringTargetingDimension
 * Generic targeting with string values used in app, website and publisher targeting.
**/
public class StringTargetingDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingMode")
    public StringTargetingDimensionTargetingModeEnum targetingMode;
    public StringTargetingDimension withTargetingMode(StringTargetingDimensionTargetingModeEnum targetingMode) {
        this.targetingMode = targetingMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public StringTargetingDimension withValues(String[] values) {
        this.values = values;
        return this;
    }
}