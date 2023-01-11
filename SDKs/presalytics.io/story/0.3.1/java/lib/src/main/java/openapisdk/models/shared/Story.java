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
 * Story
 * Base model for all types
**/
public class Story {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborators")
    public StoryCollaborator[] collaborators;
    public Story withCollaborators(StoryCollaborator[] collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Story withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public Story withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Story withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_public")
    public Boolean isPublic;
    public Story withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ooxml_documents")
    public OoxmlDocument[] ooxmlDocuments;
    public Story withOoxmlDocuments(OoxmlDocument[] ooxmlDocuments) {
        this.ooxmlDocuments = ooxmlDocuments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outline")
    public String outline;
    public Story withOutline(String outline) {
        this.outline = outline;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outline_history")
    public StoryOutlineHistory[] outlineHistory;
    public Story withOutlineHistory(StoryOutlineHistory[] outlineHistory) {
        this.outlineHistory = outlineHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Long revision;
    public Story withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Story withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Story withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public Story withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
}