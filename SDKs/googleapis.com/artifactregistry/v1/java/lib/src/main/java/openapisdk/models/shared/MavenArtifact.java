package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MavenArtifact
 * MavenArtifact represents a maven artifact.
**/
public class MavenArtifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactId")
    public String artifactId;
    public MavenArtifact withArtifactId(String artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public MavenArtifact withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupId")
    public String groupId;
    public MavenArtifact withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public MavenArtifact withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pomUri")
    public String pomUri;
    public MavenArtifact withPomUri(String pomUri) {
        this.pomUri = pomUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public MavenArtifact withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public MavenArtifact withVersion(String version) {
        this.version = version;
        return this;
    }
}