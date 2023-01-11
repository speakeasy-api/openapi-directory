package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2InfoTypeTransformation
 * A transformation to apply to text that is identified as a specific info_type.
**/
public class GooglePrivacyDlpV2InfoTypeTransformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoTypes")
    public GooglePrivacyDlpV2InfoType[] infoTypes;
    public GooglePrivacyDlpV2InfoTypeTransformation withInfoTypes(GooglePrivacyDlpV2InfoType[] infoTypes) {
        this.infoTypes = infoTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primitiveTransformation")
    public GooglePrivacyDlpV2PrimitiveTransformation primitiveTransformation;
    public GooglePrivacyDlpV2InfoTypeTransformation withPrimitiveTransformation(GooglePrivacyDlpV2PrimitiveTransformation primitiveTransformation) {
        this.primitiveTransformation = primitiveTransformation;
        return this;
    }
}