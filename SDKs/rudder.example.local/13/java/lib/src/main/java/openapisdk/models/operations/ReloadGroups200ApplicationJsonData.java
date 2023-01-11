package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadGroups200ApplicationJsonData {
    @JsonProperty("groups")
    public ReloadGroups200ApplicationJsonDataGroupsEnum groups;
    public ReloadGroups200ApplicationJsonData withGroups(ReloadGroups200ApplicationJsonDataGroupsEnum groups) {
        this.groups = groups;
        return this;
    }
}