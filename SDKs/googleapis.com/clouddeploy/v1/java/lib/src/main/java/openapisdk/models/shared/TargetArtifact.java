package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TargetArtifact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("artifactUri")
    public String artifactUri;
    public TargetArtifact withArtifactUri(String artifactUri) {
        this.artifactUri = artifactUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manifestPath")
    public String manifestPath;
    public TargetArtifact withManifestPath(String manifestPath) {
        this.manifestPath = manifestPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("skaffoldConfigPath")
    public String skaffoldConfigPath;
    public TargetArtifact withSkaffoldConfigPath(String skaffoldConfigPath) {
        this.skaffoldConfigPath = skaffoldConfigPath;
        return this;
    }
}