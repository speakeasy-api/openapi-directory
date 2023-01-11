package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2EntityId
 * An entity in a dataset is a field or set of fields that correspond to a single person. For example, in medical records the `EntityId` might be a patient identifier, or for financial records it might be an account identifier. This message is used when generalizations or analysis must take into account that multiple rows correspond to the same entity.
**/
public class GooglePrivacyDlpV2EntityId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public GooglePrivacyDlpV2FieldId field;
    public GooglePrivacyDlpV2EntityId withField(GooglePrivacyDlpV2FieldId field) {
        this.field = field;
        return this;
    }
}