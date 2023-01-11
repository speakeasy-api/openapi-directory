package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagsResponseBody
 * Response body from a successful GET /tags API call
**/
public class ListTagsResponseBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public ListTagsResponseBody withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}