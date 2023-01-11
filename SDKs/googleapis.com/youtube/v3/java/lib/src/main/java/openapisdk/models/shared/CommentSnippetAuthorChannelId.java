package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentSnippetAuthorChannelId
 * The id of the author's YouTube channel, if any.
**/
public class CommentSnippetAuthorChannelId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CommentSnippetAuthorChannelId withValue(String value) {
        this.value = value;
        return this;
    }
}