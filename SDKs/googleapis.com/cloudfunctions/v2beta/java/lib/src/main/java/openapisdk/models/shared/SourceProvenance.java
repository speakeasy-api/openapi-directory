package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceProvenance
 * Provenance of the source. Ways to find the original source, or verify that some source was used for this build.
**/
public class SourceProvenance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedRepoSource")
    public RepoSource resolvedRepoSource;
    public SourceProvenance withResolvedRepoSource(RepoSource resolvedRepoSource) {
        this.resolvedRepoSource = resolvedRepoSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolvedStorageSource")
    public StorageSource resolvedStorageSource;
    public SourceProvenance withResolvedStorageSource(StorageSource resolvedStorageSource) {
        this.resolvedStorageSource = resolvedStorageSource;
        return this;
    }
}