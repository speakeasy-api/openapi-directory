package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeDnsPtrActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsChangeDnsPtrActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsChangeDnsPtrActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}