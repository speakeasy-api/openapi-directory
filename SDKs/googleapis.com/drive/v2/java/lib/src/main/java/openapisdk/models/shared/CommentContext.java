package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentContext
 * The context of the file which is being commented on.
**/
public class CommentContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public CommentContext withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CommentContext withValue(String value) {
        this.value = value;
        return this;
    }
}