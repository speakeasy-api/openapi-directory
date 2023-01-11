package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGroup200ApplicationJsonData {
    @JsonProperty("groups")
    public openapisdk.models.shared.Group[] groups;
    public UpdateGroup200ApplicationJsonData withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}