package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * ProjectInput
 * Represents a project.
**/
public class ProjectInput {
    @JsonProperty("description")
@SpeakeasyMetadata("form:name=description")
    public String description;
    public ProjectInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public ProjectInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("settings")
@SpeakeasyMetadata("form:name=settings")
    public ProjectSettingsInput settings;
    public ProjectInput withSettings(ProjectSettingsInput settings) {
        this.settings = settings;
        return this;
    }
}