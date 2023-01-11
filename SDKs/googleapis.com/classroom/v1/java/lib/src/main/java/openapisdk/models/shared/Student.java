package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Student
 * Student in a course.
**/
public class Student {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public Student withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile")
    public UserProfile profile;
    public Student withProfile(UserProfile profile) {
        this.profile = profile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studentWorkFolder")
    public DriveFolder studentWorkFolder;
    public Student withStudentWorkFolder(DriveFolder studentWorkFolder) {
        this.studentWorkFolder = studentWorkFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public Student withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}