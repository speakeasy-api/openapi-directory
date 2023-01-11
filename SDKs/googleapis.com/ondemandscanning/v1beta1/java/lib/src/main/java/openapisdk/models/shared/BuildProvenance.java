package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BuildProvenance
 * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
**/
public class BuildProvenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildOptions")
    public java.util.Map<String, String> buildOptions;
    public BuildProvenance withBuildOptions(java.util.Map<String, String> buildOptions) {
        this.buildOptions = buildOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builderVersion")
    public String builderVersion;
    public BuildProvenance withBuilderVersion(String builderVersion) {
        this.builderVersion = builderVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("builtArtifacts")
    public Artifact[] builtArtifacts;
    public BuildProvenance withBuiltArtifacts(Artifact[] builtArtifacts) {
        this.builtArtifacts = builtArtifacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commands")
    public Command[] commands;
    public BuildProvenance withCommands(Command[] commands) {
        this.commands = commands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public BuildProvenance withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public BuildProvenance withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endTime")
    public String endTime;
    public BuildProvenance withEndTime(String endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BuildProvenance withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logsUri")
    public String logsUri;
    public BuildProvenance withLogsUri(String logsUri) {
        this.logsUri = logsUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public BuildProvenance withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceProvenance")
    public Source sourceProvenance;
    public BuildProvenance withSourceProvenance(Source sourceProvenance) {
        this.sourceProvenance = sourceProvenance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public BuildProvenance withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggerId")
    public String triggerId;
    public BuildProvenance withTriggerId(String triggerId) {
        this.triggerId = triggerId;
        return this;
    }
}