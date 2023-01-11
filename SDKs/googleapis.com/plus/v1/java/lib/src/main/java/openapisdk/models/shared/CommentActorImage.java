package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentActorImage
 * The image representation of this actor.
**/
public class CommentActorImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CommentActorImage withUrl(String url) {
        this.url = url;
        return this;
    }
}