package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostServersIdActionsCreateImage201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public PostServersIdActionsCreateImage201ApplicationJsonAction action;
    public PostServersIdActionsCreateImage201ApplicationJson withAction(PostServersIdActionsCreateImage201ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public PostServersIdActionsCreateImage201ApplicationJsonImage image;
    public PostServersIdActionsCreateImage201ApplicationJson withImage(PostServersIdActionsCreateImage201ApplicationJsonImage image) {
        this.image = image;
        return this;
    }
}