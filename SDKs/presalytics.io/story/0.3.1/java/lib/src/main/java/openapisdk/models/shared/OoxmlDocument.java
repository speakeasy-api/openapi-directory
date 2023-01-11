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
 * OoxmlDocument
 * Base model for all types
**/
public class OoxmlDocument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public OoxmlDocument withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public OoxmlDocument withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delete_target_on_story_delete")
    public Boolean deleteTargetOnStoryDelete;
    public OoxmlDocument withDeleteTargetOnStoryDelete(Boolean deleteTargetOnStoryDelete) {
        this.deleteTargetOnStoryDelete = deleteTargetOnStoryDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public OoxmlDocument withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ooxml_automation_id")
    public String ooxmlAutomationId;
    public OoxmlDocument withOoxmlAutomationId(String ooxmlAutomationId) {
        this.ooxmlAutomationId = ooxmlAutomationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("story_id")
    public String storyId;
    public OoxmlDocument withStoryId(String storyId) {
        this.storyId = storyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public OoxmlDocument withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public OoxmlDocument withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}