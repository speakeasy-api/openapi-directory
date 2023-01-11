package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCourseWorkMaterialResponse
 * Response when listing course work material.
**/
public class ListCourseWorkMaterialResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseWorkMaterial")
    public CourseWorkMaterial[] courseWorkMaterial;
    public ListCourseWorkMaterialResponse withCourseWorkMaterial(CourseWorkMaterial[] courseWorkMaterial) {
        this.courseWorkMaterial = courseWorkMaterial;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCourseWorkMaterialResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}