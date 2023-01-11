package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReloadGroup200ApplicationJsonData {
    @JsonProperty("groups")
    public openapisdk.models.shared.Group[] groups;
    public ReloadGroup200ApplicationJsonData withGroups(openapisdk.models.shared.Group[] groups) {
        this.groups = groups;
        return this;
    }
}