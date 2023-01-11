package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaBadgeColors
 * The color derived from BadgeConfig and changed to the closest recommended supported color.
**/
public class GoogleAppsDriveLabelsV2betaBadgeColors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backgroundColor")
    public GoogleTypeColor backgroundColor;
    public GoogleAppsDriveLabelsV2betaBadgeColors withBackgroundColor(GoogleTypeColor backgroundColor) {
        this.backgroundColor = backgroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("foregroundColor")
    public GoogleTypeColor foregroundColor;
    public GoogleAppsDriveLabelsV2betaBadgeColors withForegroundColor(GoogleTypeColor foregroundColor) {
        this.foregroundColor = foregroundColor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("soloColor")
    public GoogleTypeColor soloColor;
    public GoogleAppsDriveLabelsV2betaBadgeColors withSoloColor(GoogleTypeColor soloColor) {
        this.soloColor = soloColor;
        return this;
    }
}