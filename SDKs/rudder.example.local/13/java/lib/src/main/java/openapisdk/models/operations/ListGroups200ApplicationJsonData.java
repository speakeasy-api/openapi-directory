package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListGroups200ApplicationJsonData {
    @JsonProperty("groups")
    public openapisdk.models.shared.Group[] groups;
    public ListGroups200ApplicationJsonData withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}