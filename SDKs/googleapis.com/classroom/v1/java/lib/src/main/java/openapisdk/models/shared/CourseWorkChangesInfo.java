package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CourseWorkChangesInfo
 * Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
**/
public class CourseWorkChangesInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public CourseWorkChangesInfo withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
}