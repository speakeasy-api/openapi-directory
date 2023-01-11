package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatasetList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Dataset[] data;
    public DatasetList withData(Dataset[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public DatasetList withObject(String object) {
        this.object = object;
        return this;
    }
}