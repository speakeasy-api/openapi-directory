package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConferenceSolutionKey {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ConferenceSolutionKey withType(String type) {
        this.type = type;
        return this;
    }
}