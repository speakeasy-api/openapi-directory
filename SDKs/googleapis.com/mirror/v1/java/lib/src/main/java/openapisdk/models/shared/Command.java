package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Command
 * A single menu command that is part of a Contact.
**/
public class Command {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Command withType(String type) {
        this.type = type;
        return this;
    }
}