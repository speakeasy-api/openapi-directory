package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepoId
 * A unique identifier for a Cloud Repo.
**/
public class RepoId {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectRepoId")
    public ProjectRepoId projectRepoId;
    public RepoId withProjectRepoId(ProjectRepoId projectRepoId) {
        this.projectRepoId = projectRepoId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public RepoId withUid(String uid) {
        this.uid = uid;
        return this;
    }
}