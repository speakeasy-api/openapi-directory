package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGroupCategory200ApplicationJsonData {
    @JsonProperty("groupCategories")
    public openapisdk.models.shared.GroupCategory[] groupCategories;
    public UpdateGroupCategory200ApplicationJsonData withGroupCategories(openapisdk.models.shared.GroupCategory[] groupCategories) {
        this.groupCategories = groupCategories;
        return this;
    }
}