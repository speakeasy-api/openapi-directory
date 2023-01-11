package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostTracksTrackIdCommentsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public PostTracksTrackIdCommentsRequestBodyComment comment;
    public PostTracksTrackIdCommentsRequestBody withComment(PostTracksTrackIdCommentsRequestBodyComment comment) {
        this.comment = comment;
        return this;
    }
}