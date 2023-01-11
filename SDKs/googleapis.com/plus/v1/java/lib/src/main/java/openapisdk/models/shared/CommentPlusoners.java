package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentPlusoners
 * People who +1'd this comment.
**/
public class CommentPlusoners {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalItems")
    public Long totalItems;
    public CommentPlusoners withTotalItems(Long totalItems) {
        this.totalItems = totalItems;
        return this;
    }
}