package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MavenRepositoryConfig
 * MavenRepositoryConfig is maven related repository details. Provides additional configuration details for repositories of the maven format type.
**/
public class MavenRepositoryConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowSnapshotOverwrites")
    public Boolean allowSnapshotOverwrites;
    public MavenRepositoryConfig withAllowSnapshotOverwrites(Boolean allowSnapshotOverwrites) {
        this.allowSnapshotOverwrites = allowSnapshotOverwrites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionPolicy")
    public MavenRepositoryConfigVersionPolicyEnum versionPolicy;
    public MavenRepositoryConfig withVersionPolicy(MavenRepositoryConfigVersionPolicyEnum versionPolicy) {
        this.versionPolicy = versionPolicy;
        return this;
    }
}