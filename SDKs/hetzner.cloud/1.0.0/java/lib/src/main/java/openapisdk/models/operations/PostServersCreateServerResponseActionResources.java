package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersCreateServerResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersCreateServerResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersCreateServerResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}