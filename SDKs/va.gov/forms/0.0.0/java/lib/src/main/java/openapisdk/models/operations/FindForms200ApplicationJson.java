package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FindForms200ApplicationJson {
    @JsonProperty("data")
    public Object[] data;
    public FindForms200ApplicationJson withData(Object[] data) {
        this.data = data;
        return this;
    }
}