package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModelList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Model[] data;
    public ModelList withData(Model[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public ModelList withObject(String object) {
        this.object = object;
        return this;
    }
}