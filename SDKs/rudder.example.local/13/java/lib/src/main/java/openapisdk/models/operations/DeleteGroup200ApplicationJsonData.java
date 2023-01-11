package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGroup200ApplicationJsonData {
    @JsonProperty("groups")
    public openapisdk.models.shared.Group[] groups;
    public DeleteGroup200ApplicationJsonData withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}