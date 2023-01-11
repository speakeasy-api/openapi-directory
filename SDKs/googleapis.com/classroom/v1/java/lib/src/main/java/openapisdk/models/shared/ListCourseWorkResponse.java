package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCourseWorkResponse
 * Response when listing course work.
**/
public class ListCourseWorkResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseWork")
    public CourseWork[] courseWork;
    public ListCourseWorkResponse withCourseWork(CourseWork[] courseWork) {
        this.courseWork = courseWork;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCourseWorkResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}