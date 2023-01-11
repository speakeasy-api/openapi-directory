package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostServersIdActionsChangeAliasIpsActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public PostServersIdActionsChangeAliasIpsActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public PostServersIdActionsChangeAliasIpsActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}