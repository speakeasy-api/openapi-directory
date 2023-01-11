package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isBuilder")
    public Boolean isBuilder;
    public PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser withIsBuilder(Boolean isBuilder) {
        this.isBuilder = isBuilder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isReviewer")
    public Boolean isReviewer;
    public PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser withIsReviewer(Boolean isReviewer) {
        this.isReviewer = isReviewer;
        return this;
    }
}