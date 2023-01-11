package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Post
 * A regular posted comment.
**/
public class Post {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtype")
    public PostSubtypeEnum subtype;
    public Post withSubtype(PostSubtypeEnum subtype) {
        this.subtype = subtype;
        return this;
    }
}