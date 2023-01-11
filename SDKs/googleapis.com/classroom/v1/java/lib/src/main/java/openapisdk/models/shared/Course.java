package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Course
 * A Course in Classroom.
**/
public class Course {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public Course withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calendarId")
    public String calendarId;
    public Course withCalendarId(String calendarId) {
        this.calendarId = calendarId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseGroupEmail")
    public String courseGroupEmail;
    public Course withCourseGroupEmail(String courseGroupEmail) {
        this.courseGroupEmail = courseGroupEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseMaterialSets")
    public CourseMaterialSet[] courseMaterialSets;
    public Course withCourseMaterialSets(CourseMaterialSet[] courseMaterialSets) {
        this.courseMaterialSets = courseMaterialSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseState")
    public CourseCourseStateEnum courseState;
    public Course withCourseState(CourseCourseStateEnum courseState) {
        this.courseState = courseState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public Course withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Course withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptionHeading")
    public String descriptionHeading;
    public Course withDescriptionHeading(String descriptionHeading) {
        this.descriptionHeading = descriptionHeading;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enrollmentCode")
    public String enrollmentCode;
    public Course withEnrollmentCode(String enrollmentCode) {
        this.enrollmentCode = enrollmentCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradebookSettings")
    public GradebookSettings gradebookSettings;
    public Course withGradebookSettings(GradebookSettings gradebookSettings) {
        this.gradebookSettings = gradebookSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("guardiansEnabled")
    public Boolean guardiansEnabled;
    public Course withGuardiansEnabled(Boolean guardiansEnabled) {
        this.guardiansEnabled = guardiansEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Course withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Course withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerId")
    public String ownerId;
    public Course withOwnerId(String ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room")
    public String room;
    public Course withRoom(String room) {
        this.room = room;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public String section;
    public Course withSection(String section) {
        this.section = section;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teacherFolder")
    public DriveFolder teacherFolder;
    public Course withTeacherFolder(DriveFolder teacherFolder) {
        this.teacherFolder = teacherFolder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teacherGroupEmail")
    public String teacherGroupEmail;
    public Course withTeacherGroupEmail(String teacherGroupEmail) {
        this.teacherGroupEmail = teacherGroupEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Course withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}