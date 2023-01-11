package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Announcement
 * Announcement created by a teacher for students of the course
**/
public class Announcement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternateLink")
    public String alternateLink;
    public Announcement withAlternateLink(String alternateLink) {
        this.alternateLink = alternateLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assigneeMode")
    public AnnouncementAssigneeModeEnum assigneeMode;
    public Announcement withAssigneeMode(AnnouncementAssigneeModeEnum assigneeMode) {
        this.assigneeMode = assigneeMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("courseId")
    public String courseId;
    public Announcement withCourseId(String courseId) {
        this.courseId = courseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creationTime")
    public String creationTime;
    public Announcement withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatorUserId")
    public String creatorUserId;
    public Announcement withCreatorUserId(String creatorUserId) {
        this.creatorUserId = creatorUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Announcement withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("individualStudentsOptions")
    public IndividualStudentsOptions individualStudentsOptions;
    public Announcement withIndividualStudentsOptions(IndividualStudentsOptions individualStudentsOptions) {
        this.individualStudentsOptions = individualStudentsOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("materials")
    public Material[] materials;
    public Announcement withMaterials(Material[] materials) {
        this.materials = materials;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduledTime")
    public String scheduledTime;
    public Announcement withScheduledTime(String scheduledTime) {
        this.scheduledTime = scheduledTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AnnouncementStateEnum state;
    public Announcement withState(AnnouncementStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public Announcement withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Announcement withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}