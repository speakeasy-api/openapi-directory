package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompanionClickThroughOverride
 * Companion Click-through override.
**/
public class CompanionClickThroughOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickThroughUrl")
    public ClickThroughUrl clickThroughUrl;
    public CompanionClickThroughOverride withClickThroughUrl(ClickThroughUrl clickThroughUrl) {
        this.clickThroughUrl = clickThroughUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public CompanionClickThroughOverride withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
}