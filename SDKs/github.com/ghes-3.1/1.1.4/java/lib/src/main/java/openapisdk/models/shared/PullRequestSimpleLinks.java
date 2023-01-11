package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullRequestSimpleLinks {
    @JsonProperty("comments")
    public Link comments;
    public PullRequestSimpleLinks withComments(Link comments) {
        this.comments = comments;
        return this;
    }
    @JsonProperty("commits")
    public Link commits;
    public PullRequestSimpleLinks withCommits(Link commits) {
        this.commits = commits;
        return this;
    }
    @JsonProperty("html")
    public Link html;
    public PullRequestSimpleLinks withHtml(Link html) {
        this.html = html;
        return this;
    }
    @JsonProperty("issue")
    public Link issue;
    public PullRequestSimpleLinks withIssue(Link issue) {
        this.issue = issue;
        return this;
    }
    @JsonProperty("review_comment")
    public Link reviewComment;
    public PullRequestSimpleLinks withReviewComment(Link reviewComment) {
        this.reviewComment = reviewComment;
        return this;
    }
    @JsonProperty("review_comments")
    public Link reviewComments;
    public PullRequestSimpleLinks withReviewComments(Link reviewComments) {
        this.reviewComments = reviewComments;
        return this;
    }
    @JsonProperty("self")
    public Link self;
    public PullRequestSimpleLinks withSelf(Link self) {
        this.self = self;
        return this;
    }
    @JsonProperty("statuses")
    public Link statuses;
    public PullRequestSimpleLinks withStatuses(Link statuses) {
        this.statuses = statuses;
        return this;
    }
}