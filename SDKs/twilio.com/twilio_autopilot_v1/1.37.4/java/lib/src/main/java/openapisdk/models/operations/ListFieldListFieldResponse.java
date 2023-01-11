package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFieldListFieldResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public openapisdk.models.shared.AutopilotV1AssistantTaskField[] fields;
    public ListFieldListFieldResponse withFields(openapisdk.models.shared.AutopilotV1AssistantTaskField[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListFieldListFieldResponseMeta meta;
    public ListFieldListFieldResponse withMeta(ListFieldListFieldResponseMeta meta) {
        this.meta = meta;
        return this;
    }
}