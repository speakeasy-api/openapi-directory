package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FindFormByFormName200ApplicationJson {
    @JsonProperty("data")
    public Object data;
    public FindFormByFormName200ApplicationJson withData(Object data) {
        this.data = data;
        return this;
    }
}