package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCoursesResponse
 * Response when listing courses.
**/
public class ListCoursesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courses")
    public Course[] courses;
    public ListCoursesResponse withCourses(Course[] courses) {
        this.courses = courses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCoursesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}