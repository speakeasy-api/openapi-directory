package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExampleList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Example[] data;
    public ExampleList withData(Example[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public ExampleList withObject(String object) {
        this.object = object;
        return this;
    }
}