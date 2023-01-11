package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Source
 * The location of the function source code.
**/
public class Source {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repoSource")
    public RepoSource repoSource;
    public Source withRepoSource(RepoSource repoSource) {
        this.repoSource = repoSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storageSource")
    public StorageSource storageSource;
    public Source withStorageSource(StorageSource storageSource) {
        this.storageSource = storageSource;
        return this;
    }
}