package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2FieldSelectionOptions
 * Options for the selection field type.
**/
public class GoogleAppsDriveLabelsV2FieldSelectionOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("choices")
    public GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice[] choices;
    public GoogleAppsDriveLabelsV2FieldSelectionOptions withChoices(GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice[] choices) {
        this.choices = choices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listOptions")
    public GoogleAppsDriveLabelsV2FieldListOptions listOptions;
    public GoogleAppsDriveLabelsV2FieldSelectionOptions withListOptions(GoogleAppsDriveLabelsV2FieldListOptions listOptions) {
        this.listOptions = listOptions;
        return this;
    }
}