package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MediaTypeHolder {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public MediaTypeHolder withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MediaTypeHolder withName(String name) {
        this.name = name;
        return this;
    }
}