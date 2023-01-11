package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2FieldTransformation
 * The transformation to apply to the field.
**/
public class GooglePrivacyDlpV2FieldTransformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public GooglePrivacyDlpV2RecordCondition condition;
    public GooglePrivacyDlpV2FieldTransformation withCondition(GooglePrivacyDlpV2RecordCondition condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public GooglePrivacyDlpV2FieldId[] fields;
    public GooglePrivacyDlpV2FieldTransformation withFields(GooglePrivacyDlpV2FieldId[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypeTransformations")
    public GooglePrivacyDlpV2InfoTypeTransformations infoTypeTransformations;
    public GooglePrivacyDlpV2FieldTransformation withInfoTypeTransformations(GooglePrivacyDlpV2InfoTypeTransformations infoTypeTransformations) {
        this.infoTypeTransformations = infoTypeTransformations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primitiveTransformation")
    public GooglePrivacyDlpV2PrimitiveTransformation primitiveTransformation;
    public GooglePrivacyDlpV2FieldTransformation withPrimitiveTransformation(GooglePrivacyDlpV2PrimitiveTransformation primitiveTransformation) {
        this.primitiveTransformation = primitiveTransformation;
        return this;
    }
}