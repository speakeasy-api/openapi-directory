package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2LabelDisplayHints
 * UI display hints for rendering the label.
**/
public class GoogleAppsDriveLabelsV2LabelDisplayHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GoogleAppsDriveLabelsV2LabelDisplayHints withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenInSearch")
    public Boolean hiddenInSearch;
    public GoogleAppsDriveLabelsV2LabelDisplayHints withHiddenInSearch(Boolean hiddenInSearch) {
        this.hiddenInSearch = hiddenInSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public GoogleAppsDriveLabelsV2LabelDisplayHints withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shownInApply")
    public Boolean shownInApply;
    public GoogleAppsDriveLabelsV2LabelDisplayHints withShownInApply(Boolean shownInApply) {
        this.shownInApply = shownInApply;
        return this;
    }
}