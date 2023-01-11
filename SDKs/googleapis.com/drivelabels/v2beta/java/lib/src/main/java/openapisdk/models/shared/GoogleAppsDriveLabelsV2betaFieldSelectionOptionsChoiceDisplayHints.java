package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints
 * UI display hints for rendering an option.
**/
public class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeColors")
    public GoogleAppsDriveLabelsV2betaBadgeColors badgeColors;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints withBadgeColors(GoogleAppsDriveLabelsV2betaBadgeColors badgeColors) {
        this.badgeColors = badgeColors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgePriority")
    public String badgePriority;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints withBadgePriority(String badgePriority) {
        this.badgePriority = badgePriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("darkBadgeColors")
    public GoogleAppsDriveLabelsV2betaBadgeColors darkBadgeColors;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints withDarkBadgeColors(GoogleAppsDriveLabelsV2betaBadgeColors darkBadgeColors) {
        this.darkBadgeColors = darkBadgeColors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenInSearch")
    public Boolean hiddenInSearch;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints withHiddenInSearch(Boolean hiddenInSearch) {
        this.hiddenInSearch = hiddenInSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shownInApply")
    public Boolean shownInApply;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints withShownInApply(Boolean shownInApply) {
        this.shownInApply = shownInApply;
        return this;
    }
}