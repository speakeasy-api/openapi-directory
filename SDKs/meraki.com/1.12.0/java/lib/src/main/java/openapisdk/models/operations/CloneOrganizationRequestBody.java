package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CloneOrganizationRequestBody {
    @JsonProperty("name")
    public String name;
    public CloneOrganizationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}