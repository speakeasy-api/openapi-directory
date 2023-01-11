package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import openapisdk.utils.SpeakeasyMetadata;

/**
 * ProjectInput
 * Represents a project
**/
public class ProjectInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
@SpeakeasyMetadata("form:name=Description")
    public String description;
    public ProjectInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
@SpeakeasyMetadata("form:name=Name")
    public String name;
    public ProjectInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Settings")
@SpeakeasyMetadata("form:name=Settings")
    public ProjectSettings settings;
    public ProjectInput withSettings(ProjectSettings settings) {
        this.settings = settings;
        return this;
    }
}