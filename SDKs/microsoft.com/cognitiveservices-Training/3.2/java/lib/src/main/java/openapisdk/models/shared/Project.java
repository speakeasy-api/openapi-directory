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
 * Project
 * Represents a project.
**/
public class Project {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public Project withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Project withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drModeEnabled")
    public Boolean drModeEnabled;
    public Project withDrModeEnabled(Boolean drModeEnabled) {
        this.drModeEnabled = drModeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Project withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModified")
    public OffsetDateTime lastModified;
    public Project withLastModified(OffsetDateTime lastModified) {
        this.lastModified = lastModified;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Project withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("settings")
    public ProjectSettings settings;
    public Project withSettings(ProjectSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProjectStatusEnum status;
    public Project withStatus(ProjectStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thumbnailUri")
    public String thumbnailUri;
    public Project withThumbnailUri(String thumbnailUri) {
        this.thumbnailUri = thumbnailUri;
        return this;
    }
}