package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldDisplayHints
 * UI display hints for rendering a field.
**/
public class GoogleAppsDriveLabelsV2FieldDisplayHints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disabled")
    public Boolean disabled;
    public GoogleAppsDriveLabelsV2FieldDisplayHints withDisabled(Boolean disabled) {
        this.disabled = disabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiddenInSearch")
    public Boolean hiddenInSearch;
    public GoogleAppsDriveLabelsV2FieldDisplayHints withHiddenInSearch(Boolean hiddenInSearch) {
        this.hiddenInSearch = hiddenInSearch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public GoogleAppsDriveLabelsV2FieldDisplayHints withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shownInApply")
    public Boolean shownInApply;
    public GoogleAppsDriveLabelsV2FieldDisplayHints withShownInApply(Boolean shownInApply) {
        this.shownInApply = shownInApply;
        return this;
    }
}