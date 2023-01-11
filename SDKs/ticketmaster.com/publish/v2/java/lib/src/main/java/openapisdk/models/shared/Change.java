package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Change
 * This class defines the Changes on the Publish API
**/
public class Change {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from")
    public String from;
    public Change withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("op")
    public ChangeOpEnum op;
    public Change withOp(ChangeOpEnum op) {
        this.op = op;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public Change withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Change withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}