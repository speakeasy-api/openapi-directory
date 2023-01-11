package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutCoursesContentIdMetadataTagsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public PutCoursesContentIdMetadataTagsRequestBody withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}