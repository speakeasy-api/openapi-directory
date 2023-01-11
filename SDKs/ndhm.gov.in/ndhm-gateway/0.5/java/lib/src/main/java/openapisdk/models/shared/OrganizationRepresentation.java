package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OrganizationRepresentation {
    @JsonProperty("id")
    public String id;
    public OrganizationRepresentation withId(String id) {
        this.id = id;
        return this;
    }
}