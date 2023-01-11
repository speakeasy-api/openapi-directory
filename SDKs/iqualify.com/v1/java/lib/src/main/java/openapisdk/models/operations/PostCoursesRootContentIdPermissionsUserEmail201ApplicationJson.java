package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentId")
    public String contentId;
    public PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson withContentId(String contentId) {
        this.contentId = contentId;
        return this;
    }
}