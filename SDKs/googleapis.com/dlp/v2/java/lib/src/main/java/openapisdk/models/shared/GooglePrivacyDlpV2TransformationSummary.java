package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TransformationSummary
 * Summary of a single transformation. Only one of 'transformation', 'field_transformation', or 'record_suppress' will be set.
**/
public class GooglePrivacyDlpV2TransformationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GooglePrivacyDlpV2FieldId field;
    public GooglePrivacyDlpV2TransformationSummary withField(GooglePrivacyDlpV2FieldId field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldTransformations")
    public GooglePrivacyDlpV2FieldTransformation[] fieldTransformations;
    public GooglePrivacyDlpV2TransformationSummary withFieldTransformations(GooglePrivacyDlpV2FieldTransformation[] fieldTransformations) {
        this.fieldTransformations = fieldTransformations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoType")
    public GooglePrivacyDlpV2InfoType infoType;
    public GooglePrivacyDlpV2TransformationSummary withInfoType(GooglePrivacyDlpV2InfoType infoType) {
        this.infoType = infoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recordSuppress")
    public GooglePrivacyDlpV2RecordSuppression recordSuppress;
    public GooglePrivacyDlpV2TransformationSummary withRecordSuppress(GooglePrivacyDlpV2RecordSuppression recordSuppress) {
        this.recordSuppress = recordSuppress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public GooglePrivacyDlpV2SummaryResult[] results;
    public GooglePrivacyDlpV2TransformationSummary withResults(GooglePrivacyDlpV2SummaryResult[] results) {
        this.results = results;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformation")
    public GooglePrivacyDlpV2PrimitiveTransformation transformation;
    public GooglePrivacyDlpV2TransformationSummary withTransformation(GooglePrivacyDlpV2PrimitiveTransformation transformation) {
        this.transformation = transformation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transformedBytes")
    public String transformedBytes;
    public GooglePrivacyDlpV2TransformationSummary withTransformedBytes(String transformedBytes) {
        this.transformedBytes = transformedBytes;
        return this;
    }
}