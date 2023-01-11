package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NumericTargetingDimension
 * Generic targeting used for targeting dimensions that contain a list of included and excluded numeric IDs used in app, user list, geo, and vertical id targeting.
**/
public class NumericTargetingDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedIds")
    public String[] excludedIds;
    public NumericTargetingDimension withExcludedIds(String[] excludedIds) {
        this.excludedIds = excludedIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedIds")
    public String[] includedIds;
    public NumericTargetingDimension withIncludedIds(String[] includedIds) {
        this.includedIds = includedIds;
        return this;
    }
}