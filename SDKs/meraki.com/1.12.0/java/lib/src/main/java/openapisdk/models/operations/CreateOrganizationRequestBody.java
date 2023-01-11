package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateOrganizationRequestBody {
    @JsonProperty("name")
    public String name;
    public CreateOrganizationRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}