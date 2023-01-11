package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput
 * Request to change the type of a Field.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateOptions")
    public GoogleAppsDriveLabelsV2betaFieldDateOptionsInput dateOptions;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput withDateOptions(GoogleAppsDriveLabelsV2betaFieldDateOptionsInput dateOptions) {
        this.dateOptions = dateOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionOptions")
    public GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput selectionOptions;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput withSelectionOptions(GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput selectionOptions) {
        this.selectionOptions = selectionOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateMask")
    public String updateMask;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput withUpdateMask(String updateMask) {
        this.updateMask = updateMask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userOptions")
    public GoogleAppsDriveLabelsV2betaFieldUserOptions userOptions;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput withUserOptions(GoogleAppsDriveLabelsV2betaFieldUserOptions userOptions) {
        this.userOptions = userOptions;
        return this;
    }
}