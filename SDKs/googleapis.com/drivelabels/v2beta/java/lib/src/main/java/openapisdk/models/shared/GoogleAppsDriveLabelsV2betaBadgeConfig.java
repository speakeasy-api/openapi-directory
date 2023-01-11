package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaBadgeConfig
 * Badge status of the label.
**/
public class GoogleAppsDriveLabelsV2betaBadgeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public GoogleTypeColor color;
    public GoogleAppsDriveLabelsV2betaBadgeConfig withColor(GoogleTypeColor color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priorityOverride")
    public String priorityOverride;
    public GoogleAppsDriveLabelsV2betaBadgeConfig withPriorityOverride(String priorityOverride) {
        this.priorityOverride = priorityOverride;
        return this;
    }
}