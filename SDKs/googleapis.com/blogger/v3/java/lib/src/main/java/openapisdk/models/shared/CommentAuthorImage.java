package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentAuthorImage
 * The creator's avatar.
**/
public class CommentAuthorImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public CommentAuthorImage withUrl(String url) {
        this.url = url;
        return this;
    }
}