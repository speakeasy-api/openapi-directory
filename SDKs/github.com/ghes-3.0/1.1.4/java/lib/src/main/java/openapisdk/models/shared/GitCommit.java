package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GitCommit
 * Low-level Git commit operations within a repository
**/
public class GitCommit {
    @JsonProperty("author")
    public GitCommitAuthor author;
    public GitCommit withAuthor(GitCommitAuthor author) {
        this.author = author;
        return this;
    }
    @JsonProperty("committer")
    public GitCommitCommitter committer;
    public GitCommit withCommitter(GitCommitCommitter committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public GitCommit withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public GitCommit withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public GitCommit withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("parents")
    public GitCommitParents[] parents;
    public GitCommit withParents(GitCommitParents[] parents) {
        this.parents = parents;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public GitCommit withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("tree")
    public GitCommitTree tree;
    public GitCommit withTree(GitCommitTree tree) {
        this.tree = tree;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public GitCommit withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("verification")
    public GitCommitVerification verification;
    public GitCommit withVerification(GitCommitVerification verification) {
        this.verification = verification;
        return this;
    }
}