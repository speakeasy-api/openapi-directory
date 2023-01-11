package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NodeFullTimezone {
    @JsonProperty("name")
    public String name;
    public NodeFullTimezone withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offset")
    public String offset;
    public NodeFullTimezone withOffset(String offset) {
        this.offset = offset;
        return this;
    }
}