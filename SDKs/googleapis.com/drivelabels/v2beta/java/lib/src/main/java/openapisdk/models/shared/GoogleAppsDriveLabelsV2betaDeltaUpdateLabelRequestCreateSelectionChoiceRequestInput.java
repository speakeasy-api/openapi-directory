package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput
 * Request to create a Selection Choice.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("choice")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput choice;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput withChoice(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput choice) {
        this.choice = choice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldId")
    public String fieldId;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput withFieldId(String fieldId) {
        this.fieldId = fieldId;
        return this;
    }
}