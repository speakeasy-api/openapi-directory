package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldDisplayHints
 * UI display hints for rendering a field.
**/
public class GoogleAppsDriveLabelsV2betaFieldDisplayHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GoogleAppsDriveLabelsV2betaFieldDisplayHints withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenInSearch")
    public Boolean hiddenInSearch;
    public GoogleAppsDriveLabelsV2betaFieldDisplayHints withHiddenInSearch(Boolean hiddenInSearch) {
        this.hiddenInSearch = hiddenInSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public GoogleAppsDriveLabelsV2betaFieldDisplayHints withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shownInApply")
    public Boolean shownInApply;
    public GoogleAppsDriveLabelsV2betaFieldDisplayHints withShownInApply(Boolean shownInApply) {
        this.shownInApply = shownInApply;
        return this;
    }
}