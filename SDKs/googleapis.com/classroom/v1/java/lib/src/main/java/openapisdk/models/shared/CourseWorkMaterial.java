package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CourseWorkMaterial
 * Course work material created by a teacher for students of the course
**/
public class CourseWorkMaterial {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public CourseWorkMaterial withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigneeMode")
    public CourseWorkMaterialAssigneeModeEnum assigneeMode;
    public CourseWorkMaterial withAssigneeMode(CourseWorkMaterialAssigneeModeEnum assigneeMode) {
        this.assigneeMode = assigneeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public CourseWorkMaterial withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public CourseWorkMaterial withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorUserId")
    public String creatorUserId;
    public CourseWorkMaterial withCreatorUserId(String creatorUserId) {
        this.creatorUserId = creatorUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CourseWorkMaterial withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CourseWorkMaterial withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualStudentsOptions")
    public IndividualStudentsOptions individualStudentsOptions;
    public CourseWorkMaterial withIndividualStudentsOptions(IndividualStudentsOptions individualStudentsOptions) {
        this.individualStudentsOptions = individualStudentsOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public Material[] materials;
    public CourseWorkMaterial withMaterials(Material[] materials) {
        this.materials = materials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledTime")
    public String scheduledTime;
    public CourseWorkMaterial withScheduledTime(String scheduledTime) {
        this.scheduledTime = scheduledTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public CourseWorkMaterialStateEnum state;
    public CourseWorkMaterial withState(CourseWorkMaterialStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public CourseWorkMaterial withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicId")
    public String topicId;
    public CourseWorkMaterial withTopicId(String topicId) {
        this.topicId = topicId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public CourseWorkMaterial withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}