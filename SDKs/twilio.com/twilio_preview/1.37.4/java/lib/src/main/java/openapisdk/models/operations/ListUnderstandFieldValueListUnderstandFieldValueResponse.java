package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandFieldValueListUnderstandFieldValueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_values")
    public openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue[] fieldValues;
    public ListUnderstandFieldValueListUnderstandFieldValueResponse withFieldValues(openapisdk.models.shared.PreviewUnderstandAssistantFieldTypeFieldValue[] fieldValues) {
        this.fieldValues = fieldValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandFieldValueListUnderstandFieldValueResponseMeta meta;
    public ListUnderstandFieldValueListUnderstandFieldValueResponse withMeta(ListUnderstandFieldValueListUnderstandFieldValueResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}