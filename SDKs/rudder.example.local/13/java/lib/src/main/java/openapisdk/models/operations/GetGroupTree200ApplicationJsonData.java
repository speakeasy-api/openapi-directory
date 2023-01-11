package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGroupTree200ApplicationJsonData {
    @JsonProperty("groupCategories")
    public java.util.Map<String, Object> groupCategories;
    public GetGroupTree200ApplicationJsonData withGroupCategories(java.util.Map<String, Object> groupCategories) {
        this.groupCategories = groupCategories;
        return this;
    }
}