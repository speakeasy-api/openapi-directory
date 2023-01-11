package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CommandType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CommandType withType(String type) {
        this.type = type;
        return this;
    }
}