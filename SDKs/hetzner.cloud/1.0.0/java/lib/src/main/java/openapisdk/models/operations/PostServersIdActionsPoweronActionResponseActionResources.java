package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsPoweronActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsPoweronActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsPoweronActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}