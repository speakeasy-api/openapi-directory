package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput
 * Request to create a Field within a Label.
**/
public class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GoogleAppsDriveLabelsV2betaFieldInput field;
    public GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput withField(GoogleAppsDriveLabelsV2betaFieldInput field) {
        this.field = field;
        return this;
    }
}