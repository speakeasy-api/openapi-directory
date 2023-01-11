package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CourseWork
 * Course work created by a teacher for students of the course.
**/
public class CourseWork {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public CourseWork withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigneeMode")
    public CourseWorkAssigneeModeEnum assigneeMode;
    public CourseWork withAssigneeMode(CourseWorkAssigneeModeEnum assigneeMode) {
        this.assigneeMode = assigneeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignment")
    public Assignment assignment;
    public CourseWork withAssignment(Assignment assignment) {
        this.assignment = assignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associatedWithDeveloper")
    public Boolean associatedWithDeveloper;
    public CourseWork withAssociatedWithDeveloper(Boolean associatedWithDeveloper) {
        this.associatedWithDeveloper = associatedWithDeveloper;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public CourseWork withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public CourseWork withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorUserId")
    public String creatorUserId;
    public CourseWork withCreatorUserId(String creatorUserId) {
        this.creatorUserId = creatorUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CourseWork withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueDate")
    public Date dueDate;
    public CourseWork withDueDate(Date dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dueTime")
    public TimeOfDay dueTime;
    public CourseWork withDueTime(TimeOfDay dueTime) {
        this.dueTime = dueTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gradeCategory")
    public GradeCategory gradeCategory;
    public CourseWork withGradeCategory(GradeCategory gradeCategory) {
        this.gradeCategory = gradeCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CourseWork withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualStudentsOptions")
    public IndividualStudentsOptions individualStudentsOptions;
    public CourseWork withIndividualStudentsOptions(IndividualStudentsOptions individualStudentsOptions) {
        this.individualStudentsOptions = individualStudentsOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public Material[] materials;
    public CourseWork withMaterials(Material[] materials) {
        this.materials = materials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPoints")
    public Double maxPoints;
    public CourseWork withMaxPoints(Double maxPoints) {
        this.maxPoints = maxPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("multipleChoiceQuestion")
    public MultipleChoiceQuestion multipleChoiceQuestion;
    public CourseWork withMultipleChoiceQuestion(MultipleChoiceQuestion multipleChoiceQuestion) {
        this.multipleChoiceQuestion = multipleChoiceQuestion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledTime")
    public String scheduledTime;
    public CourseWork withScheduledTime(String scheduledTime) {
        this.scheduledTime = scheduledTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CourseWorkStateEnum state;
    public CourseWork withState(CourseWorkStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submissionModificationMode")
    public CourseWorkSubmissionModificationModeEnum submissionModificationMode;
    public CourseWork withSubmissionModificationMode(CourseWorkSubmissionModificationModeEnum submissionModificationMode) {
        this.submissionModificationMode = submissionModificationMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CourseWork withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicId")
    public String topicId;
    public CourseWork withTopicId(String topicId) {
        this.topicId = topicId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public CourseWork withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workType")
    public CourseWorkWorkTypeEnum workType;
    public CourseWork withWorkType(CourseWorkWorkTypeEnum workType) {
        this.workType = workType;
        return this;
    }
}