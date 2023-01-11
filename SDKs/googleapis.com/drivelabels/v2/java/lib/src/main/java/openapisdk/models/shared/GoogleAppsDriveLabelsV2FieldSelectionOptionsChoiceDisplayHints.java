package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints
 * UI display hints for rendering an option.
**/
public class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgeColors")
    public GoogleAppsDriveLabelsV2BadgeColors badgeColors;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints withBadgeColors(GoogleAppsDriveLabelsV2BadgeColors badgeColors) {
        this.badgeColors = badgeColors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("badgePriority")
    public String badgePriority;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints withBadgePriority(String badgePriority) {
        this.badgePriority = badgePriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("darkBadgeColors")
    public GoogleAppsDriveLabelsV2BadgeColors darkBadgeColors;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints withDarkBadgeColors(GoogleAppsDriveLabelsV2BadgeColors darkBadgeColors) {
        this.darkBadgeColors = darkBadgeColors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenInSearch")
    public Boolean hiddenInSearch;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints withHiddenInSearch(Boolean hiddenInSearch) {
        this.hiddenInSearch = hiddenInSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shownInApply")
    public Boolean shownInApply;
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints withShownInApply(Boolean shownInApply) {
        this.shownInApply = shownInApply;
        return this;
    }
}