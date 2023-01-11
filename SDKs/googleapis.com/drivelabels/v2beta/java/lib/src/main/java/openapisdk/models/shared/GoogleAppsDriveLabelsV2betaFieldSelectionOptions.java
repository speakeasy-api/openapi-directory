package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaFieldSelectionOptions
 * Options for the selection field type.
**/
public class GoogleAppsDriveLabelsV2betaFieldSelectionOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("choices")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice[] choices;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptions withChoices(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice[] choices) {
        this.choices = choices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listOptions")
    public GoogleAppsDriveLabelsV2betaFieldListOptions listOptions;
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptions withListOptions(GoogleAppsDriveLabelsV2betaFieldListOptions listOptions) {
        this.listOptions = listOptions;
        return this;
    }
}