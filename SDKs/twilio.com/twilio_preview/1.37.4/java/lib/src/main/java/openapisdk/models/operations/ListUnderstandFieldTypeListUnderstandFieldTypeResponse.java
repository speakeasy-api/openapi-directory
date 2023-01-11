package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandFieldTypeListUnderstandFieldTypeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field_types")
    public openapisdk.models.shared.PreviewUnderstandAssistantFieldType[] fieldTypes;
    public ListUnderstandFieldTypeListUnderstandFieldTypeResponse withFieldTypes(openapisdk.models.shared.PreviewUnderstandAssistantFieldType[] fieldTypes) {
        this.fieldTypes = fieldTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta meta;
    public ListUnderstandFieldTypeListUnderstandFieldTypeResponse withMeta(ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}