package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepoSource
 * Location of the source in a Google Cloud Source Repository.
**/
public class RepoSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchName")
    public String branchName;
    public RepoSource withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitSha")
    public String commitSha;
    public RepoSource withCommitSha(String commitSha) {
        this.commitSha = commitSha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dir")
    public String dir;
    public RepoSource withDir(String dir) {
        this.dir = dir;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("invertRegex")
    public Boolean invertRegex;
    public RepoSource withInvertRegex(Boolean invertRegex) {
        this.invertRegex = invertRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public RepoSource withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repoName")
    public String repoName;
    public RepoSource withRepoName(String repoName) {
        this.repoName = repoName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagName")
    public String tagName;
    public RepoSource withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}