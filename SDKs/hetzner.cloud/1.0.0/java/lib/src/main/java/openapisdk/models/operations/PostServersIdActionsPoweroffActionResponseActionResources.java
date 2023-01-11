package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsPoweroffActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsPoweroffActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsPoweroffActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}