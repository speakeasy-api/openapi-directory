package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommitSearchResultItem
 * Commit Search Result Item
**/
public class CommitSearchResultItem {
    @JsonProperty("author")
    public CommitSearchResultItemSimpleUser author;
    public CommitSearchResultItem withAuthor(CommitSearchResultItemSimpleUser author) {
        this.author = author;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public CommitSearchResultItem withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonProperty("commit")
    public CommitSearchResultItemCommit commit;
    public CommitSearchResultItem withCommit(CommitSearchResultItemCommit commit) {
        this.commit = commit;
        return this;
    }
    @JsonProperty("committer")
    public CommitSearchResultItemGitUser committer;
    public CommitSearchResultItem withCommitter(CommitSearchResultItemGitUser committer) {
        this.committer = committer;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public CommitSearchResultItem withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public CommitSearchResultItem withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("parents")
    public CommitSearchResultItemParents[] parents;
    public CommitSearchResultItem withParents(CommitSearchResultItemParents[] parents) {
        this.parents = parents;
        return this;
    }
    @JsonProperty("repository")
    public MinimalRepository repository;
    public CommitSearchResultItem withRepository(MinimalRepository repository) {
        this.repository = repository;
        return this;
    }
    @JsonProperty("score")
    public Double score;
    public CommitSearchResultItem withScore(Double score) {
        this.score = score;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public CommitSearchResultItem withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text_matches")
    public SearchResultTextMatches[] textMatches;
    public CommitSearchResultItem withTextMatches(SearchResultTextMatches[] textMatches) {
        this.textMatches = textMatches;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public CommitSearchResultItem withUrl(String url) {
        this.url = url;
        return this;
    }
}