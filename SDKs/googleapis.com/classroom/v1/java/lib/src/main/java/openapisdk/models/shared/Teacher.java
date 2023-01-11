package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Teacher
 * Teacher of a course.
**/
public class Teacher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public Teacher withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public UserProfile profile;
    public Teacher withProfile(UserProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public Teacher withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}