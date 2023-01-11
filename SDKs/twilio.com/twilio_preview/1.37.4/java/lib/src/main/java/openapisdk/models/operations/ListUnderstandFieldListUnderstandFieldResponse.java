package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUnderstandFieldListUnderstandFieldResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public openapisdk.models.shared.PreviewUnderstandAssistantTaskField[] fields;
    public ListUnderstandFieldListUnderstandFieldResponse withFields(openapisdk.models.shared.PreviewUnderstandAssistantTaskField[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListUnderstandFieldListUnderstandFieldResponseMeta meta;
    public ListUnderstandFieldListUnderstandFieldResponse withMeta(ListUnderstandFieldListUnderstandFieldResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}