package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2BadgeConfig
 * Badge status of the label.
**/
public class GoogleAppsDriveLabelsV2BadgeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public GoogleTypeColor color;
    public GoogleAppsDriveLabelsV2BadgeConfig withColor(GoogleTypeColor color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priorityOverride")
    public String priorityOverride;
    public GoogleAppsDriveLabelsV2BadgeConfig withPriorityOverride(String priorityOverride) {
        this.priorityOverride = priorityOverride;
        return this;
    }
}