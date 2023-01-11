package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateChangeRequestRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateChangeRequestRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateChangeRequestRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}