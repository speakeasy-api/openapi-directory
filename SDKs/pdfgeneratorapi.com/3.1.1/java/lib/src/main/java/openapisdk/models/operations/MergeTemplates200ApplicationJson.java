package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MergeTemplates200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public MergeTemplates200ApplicationJsonMeta meta;
    public MergeTemplates200ApplicationJson withMeta(MergeTemplates200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public String response;
    public MergeTemplates200ApplicationJson withResponse(String response) {
        this.response = response;
        return this;
    }
}