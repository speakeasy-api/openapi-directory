package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsResetPassword201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsResetPassword201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsResetPassword201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}