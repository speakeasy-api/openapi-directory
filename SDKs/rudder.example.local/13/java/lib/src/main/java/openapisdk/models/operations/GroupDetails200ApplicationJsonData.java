package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GroupDetails200ApplicationJsonData {
    @JsonProperty("groups")
    public openapisdk.models.shared.Group[] groups;
    public GroupDetails200ApplicationJsonData withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}