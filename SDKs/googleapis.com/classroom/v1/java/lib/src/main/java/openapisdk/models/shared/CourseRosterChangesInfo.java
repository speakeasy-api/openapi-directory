package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CourseRosterChangesInfo
 * Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
**/
public class CourseRosterChangesInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public CourseRosterChangesInfo withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}