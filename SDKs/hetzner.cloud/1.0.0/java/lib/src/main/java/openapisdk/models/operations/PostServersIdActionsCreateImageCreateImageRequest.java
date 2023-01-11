package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsCreateImageCreateImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostServersIdActionsCreateImageCreateImageRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public PostServersIdActionsCreateImageCreateImageRequestLabels labels;
    public PostServersIdActionsCreateImageCreateImageRequest withLabels(PostServersIdActionsCreateImageCreateImageRequestLabels labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PostServersIdActionsCreateImageCreateImageRequestTypeEnum type;
    public PostServersIdActionsCreateImageCreateImageRequest withType(PostServersIdActionsCreateImageCreateImageRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}