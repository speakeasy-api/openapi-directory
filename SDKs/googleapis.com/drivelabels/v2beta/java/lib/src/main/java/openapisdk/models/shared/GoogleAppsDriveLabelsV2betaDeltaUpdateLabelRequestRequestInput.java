package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput
 * A single kind of update to apply to a Label.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createField")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput createField;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withCreateField(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput createField) {
        this.createField = createField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createSelectionChoice")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput createSelectionChoice;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withCreateSelectionChoice(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestInput createSelectionChoice) {
        this.createSelectionChoice = createSelectionChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteField")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest deleteField;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withDeleteField(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest deleteField) {
        this.deleteField = deleteField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteSelectionChoice")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest deleteSelectionChoice;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withDeleteSelectionChoice(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest deleteSelectionChoice) {
        this.deleteSelectionChoice = deleteSelectionChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableField")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest disableField;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withDisableField(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest disableField) {
        this.disableField = disableField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableSelectionChoice")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest disableSelectionChoice;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withDisableSelectionChoice(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest disableSelectionChoice) {
        this.disableSelectionChoice = disableSelectionChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableField")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest enableField;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withEnableField(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest enableField) {
        this.enableField = enableField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableSelectionChoice")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest enableSelectionChoice;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withEnableSelectionChoice(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest enableSelectionChoice) {
        this.enableSelectionChoice = enableSelectionChoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateField")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest updateField;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withUpdateField(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest updateField) {
        this.updateField = updateField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateFieldType")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput updateFieldType;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withUpdateFieldType(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput updateFieldType) {
        this.updateFieldType = updateFieldType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateLabel")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest updateLabel;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withUpdateLabel(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest updateLabel) {
        this.updateLabel = updateLabel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateSelectionChoiceProperties")
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest updateSelectionChoiceProperties;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestInput withUpdateSelectionChoiceProperties(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest updateSelectionChoiceProperties) {
        this.updateSelectionChoiceProperties = updateSelectionChoiceProperties;
        return this;
    }
}