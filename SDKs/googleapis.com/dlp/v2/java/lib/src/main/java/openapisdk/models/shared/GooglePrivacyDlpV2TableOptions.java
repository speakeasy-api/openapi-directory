package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2TableOptions
 * Instructions regarding the table content being inspected.
**/
public class GooglePrivacyDlpV2TableOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifyingFields")
    public GooglePrivacyDlpV2FieldId[] identifyingFields;
    public GooglePrivacyDlpV2TableOptions withIdentifyingFields(GooglePrivacyDlpV2FieldId[] identifyingFields) {
        this.identifyingFields = identifyingFields;
        return this;
    }
}