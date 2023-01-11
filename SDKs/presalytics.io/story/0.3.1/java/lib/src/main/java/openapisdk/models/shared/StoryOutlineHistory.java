package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * StoryOutlineHistory
 * Base model for all types
**/
public class StoryOutlineHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborator_user_id")
    public String collaboratorUserId;
    public StoryOutlineHistory withCollaboratorUserId(String collaboratorUserId) {
        this.collaboratorUserId = collaboratorUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public StoryOutlineHistory withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public StoryOutlineHistory withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public StoryOutlineHistory withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outline")
    public String outline;
    public StoryOutlineHistory withOutline(String outline) {
        this.outline = outline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision_number")
    public Long revisionNumber;
    public StoryOutlineHistory withRevisionNumber(Long revisionNumber) {
        this.revisionNumber = revisionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("story_id")
    public String storyId;
    public StoryOutlineHistory withStoryId(String storyId) {
        this.storyId = storyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public StoryOutlineHistory withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public StoryOutlineHistory withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}