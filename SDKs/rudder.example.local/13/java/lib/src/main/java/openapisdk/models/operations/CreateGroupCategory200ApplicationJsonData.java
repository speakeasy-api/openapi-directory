package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateGroupCategory200ApplicationJsonData {
    @JsonProperty("groupCategories")
    public openapisdk.models.shared.GroupCategory[] groupCategories;
    public CreateGroupCategory200ApplicationJsonData withGroupCategories(openapisdk.models.shared.GroupCategory[] groupCategories) {
        this.groupCategories = groupCategories;
        return this;
    }
}