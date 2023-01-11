package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPlacementGroupsCreatePlacementGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, Object> labels;
    public PostPlacementGroupsCreatePlacementGroupRequest withLabels(java.util.Map<String, Object> labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostPlacementGroupsCreatePlacementGroupRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public PostPlacementGroupsCreatePlacementGroupRequestTypeEnum type;
    public PostPlacementGroupsCreatePlacementGroupRequest withType(PostPlacementGroupsCreatePlacementGroupRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}