package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Commentary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Commentary")
    public CommentaryCommentary commentary;
    public Commentary withCommentary(CommentaryCommentary commentary) {
        this.commentary = commentary;
        return this;
    }
}