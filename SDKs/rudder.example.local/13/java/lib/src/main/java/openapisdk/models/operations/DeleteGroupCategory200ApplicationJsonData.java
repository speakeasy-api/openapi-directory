package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGroupCategory200ApplicationJsonData {
    @JsonProperty("groupCategories")
    public openapisdk.models.shared.GroupCategory[] groupCategories;
    public DeleteGroupCategory200ApplicationJsonData withGroupCategories(openapisdk.models.shared.GroupCategory[] groupCategories) {
        this.groupCategories = groupCategories;
        return this;
    }
}