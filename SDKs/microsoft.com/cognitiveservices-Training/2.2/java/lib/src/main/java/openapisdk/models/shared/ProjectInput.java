package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * ProjectInput
 * Represents a project.
**/
public class ProjectInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
@SpeakeasyMetadata("form:name=description")
    public String description;
    public ProjectInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
@SpeakeasyMetadata("form:name=name")
    public String name;
    public ProjectInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
@SpeakeasyMetadata("form:name=settings")
    public ProjectSettings settings;
    public ProjectInput withSettings(ProjectSettings settings) {
        this.settings = settings;
        return this;
    }
}