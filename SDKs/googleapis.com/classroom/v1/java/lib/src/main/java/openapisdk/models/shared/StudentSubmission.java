package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StudentSubmission
 * Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
**/
public class StudentSubmission {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public StudentSubmission withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignedGrade")
    public Double assignedGrade;
    public StudentSubmission withAssignedGrade(Double assignedGrade) {
        this.assignedGrade = assignedGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignmentSubmission")
    public AssignmentSubmission assignmentSubmission;
    public StudentSubmission withAssignmentSubmission(AssignmentSubmission assignmentSubmission) {
        this.assignmentSubmission = assignmentSubmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedWithDeveloper")
    public Boolean associatedWithDeveloper;
    public StudentSubmission withAssociatedWithDeveloper(Boolean associatedWithDeveloper) {
        this.associatedWithDeveloper = associatedWithDeveloper;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public StudentSubmission withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseWorkId")
    public String courseWorkId;
    public StudentSubmission withCourseWorkId(String courseWorkId) {
        this.courseWorkId = courseWorkId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseWorkType")
    public StudentSubmissionCourseWorkTypeEnum courseWorkType;
    public StudentSubmission withCourseWorkType(StudentSubmissionCourseWorkTypeEnum courseWorkType) {
        this.courseWorkType = courseWorkType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public StudentSubmission withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draftGrade")
    public Double draftGrade;
    public StudentSubmission withDraftGrade(Double draftGrade) {
        this.draftGrade = draftGrade;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public StudentSubmission withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("late")
    public Boolean late;
    public StudentSubmission withLate(Boolean late) {
        this.late = late;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multipleChoiceSubmission")
    public MultipleChoiceSubmission multipleChoiceSubmission;
    public StudentSubmission withMultipleChoiceSubmission(MultipleChoiceSubmission multipleChoiceSubmission) {
        this.multipleChoiceSubmission = multipleChoiceSubmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shortAnswerSubmission")
    public ShortAnswerSubmission shortAnswerSubmission;
    public StudentSubmission withShortAnswerSubmission(ShortAnswerSubmission shortAnswerSubmission) {
        this.shortAnswerSubmission = shortAnswerSubmission;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public StudentSubmissionStateEnum state;
    public StudentSubmission withState(StudentSubmissionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submissionHistory")
    public SubmissionHistory[] submissionHistory;
    public StudentSubmission withSubmissionHistory(SubmissionHistory[] submissionHistory) {
        this.submissionHistory = submissionHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public StudentSubmission withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public StudentSubmission withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}