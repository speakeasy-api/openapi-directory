package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2RecordTransformations
 * A type of transformation that is applied over structured data such as a table.
**/
public class GooglePrivacyDlpV2RecordTransformations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldTransformations")
    public GooglePrivacyDlpV2FieldTransformation[] fieldTransformations;
    public GooglePrivacyDlpV2RecordTransformations withFieldTransformations(GooglePrivacyDlpV2FieldTransformation[] fieldTransformations) {
        this.fieldTransformations = fieldTransformations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordSuppressions")
    public GooglePrivacyDlpV2RecordSuppression[] recordSuppressions;
    public GooglePrivacyDlpV2RecordTransformations withRecordSuppressions(GooglePrivacyDlpV2RecordSuppression[] recordSuppressions) {
        this.recordSuppressions = recordSuppressions;
        return this;
    }
}