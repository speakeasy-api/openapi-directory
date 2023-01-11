package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BuildInfo {
    @JsonProperty("build_type")
    public Integer buildType;
    public BuildInfo withBuildType(Integer buildType) {
        this.buildType = buildType;
        return this;
    }
    @JsonProperty("cast_build_revision")
    public String castBuildRevision;
    public BuildInfo withCastBuildRevision(String castBuildRevision) {
        this.castBuildRevision = castBuildRevision;
        return this;
    }
    @JsonProperty("cast_control_version")
    public Integer castControlVersion;
    public BuildInfo withCastControlVersion(Integer castControlVersion) {
        this.castControlVersion = castControlVersion;
        return this;
    }
    @JsonProperty("preview_channel_state")
    public Integer previewChannelState;
    public BuildInfo withPreviewChannelState(Integer previewChannelState) {
        this.previewChannelState = previewChannelState;
        return this;
    }
    @JsonProperty("release_track")
    public String releaseTrack;
    public BuildInfo withReleaseTrack(String releaseTrack) {
        this.releaseTrack = releaseTrack;
        return this;
    }
    @JsonProperty("system_build_number")
    public String systemBuildNumber;
    public BuildInfo withSystemBuildNumber(String systemBuildNumber) {
        this.systemBuildNumber = systemBuildNumber;
        return this;
    }
}