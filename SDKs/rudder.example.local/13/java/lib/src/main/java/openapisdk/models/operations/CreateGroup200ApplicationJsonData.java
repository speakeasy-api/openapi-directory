package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGroup200ApplicationJsonData {
    @JsonProperty("groups")
    public openapisdk.models.shared.Group[] groups;
    public CreateGroup200ApplicationJsonData withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}