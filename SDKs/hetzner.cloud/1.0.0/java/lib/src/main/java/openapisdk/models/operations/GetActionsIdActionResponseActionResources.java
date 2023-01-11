package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetActionsIdActionResponseActionResources {
    @JsonProperty("id")
    public Long id;
    public GetActionsIdActionResponseActionResources withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public GetActionsIdActionResponseActionResources withType(String type) {
        this.type = type;
        return this;
    }
}