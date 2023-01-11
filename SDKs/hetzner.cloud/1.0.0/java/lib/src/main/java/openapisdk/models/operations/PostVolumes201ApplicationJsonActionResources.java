package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostVolumes201ApplicationJsonActionResources {
    @JsonProperty("id")
    public Long id;
    public PostVolumes201ApplicationJsonActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostVolumes201ApplicationJsonActionResources withType(String type) {
        this.type = type;
        return this;
    }
}