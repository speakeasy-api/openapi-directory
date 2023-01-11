package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFieldValueListFieldValueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_values")
    public openapisdk.models.shared.AutopilotV1AssistantFieldTypeFieldValue[] fieldValues;
    public ListFieldValueListFieldValueResponse withFieldValues(openapisdk.models.shared.AutopilotV1AssistantFieldTypeFieldValue[] fieldValues) {
        this.fieldValues = fieldValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFieldValueListFieldValueResponseMeta meta;
    public ListFieldValueListFieldValueResponse withMeta(ListFieldValueListFieldValueResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}