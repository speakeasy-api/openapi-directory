package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFieldTypeListFieldTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_types")
    public openapisdk.models.shared.AutopilotV1AssistantFieldType[] fieldTypes;
    public ListFieldTypeListFieldTypeResponse withFieldTypes(openapisdk.models.shared.AutopilotV1AssistantFieldType[] fieldTypes) {
        this.fieldTypes = fieldTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFieldTypeListFieldTypeResponseMeta meta;
    public ListFieldTypeListFieldTypeResponse withMeta(ListFieldTypeListFieldTypeResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}