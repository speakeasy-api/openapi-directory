package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * PullRequestReview
 * Pull Request Reviews are reviews on pull requests.
**/
public class PullRequestReview {
    @JsonProperty("_links")
    public PullRequestReviewLinks links;
    public PullRequestReview withLinks(PullRequestReviewLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("author_association")
    public AuthorAssociationEnum authorAssociation;
    public PullRequestReview withAuthorAssociation(AuthorAssociationEnum authorAssociation) {
        this.authorAssociation = authorAssociation;
        return this;
    }
    @JsonProperty("body")
    public String body;
    public PullRequestReview withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_html")
    public String bodyHtml;
    public PullRequestReview withBodyHtml(String bodyHtml) {
        this.bodyHtml = bodyHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body_text")
    public String bodyText;
    public PullRequestReview withBodyText(String bodyText) {
        this.bodyText = bodyText;
        return this;
    }
    @JsonProperty("commit_id")
    public String commitId;
    public PullRequestReview withCommitId(String commitId) {
        this.commitId = commitId;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PullRequestReview withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PullRequestReview withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PullRequestReview withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("pull_request_url")
    public String pullRequestUrl;
    public PullRequestReview withPullRequestUrl(String pullRequestUrl) {
        this.pullRequestUrl = pullRequestUrl;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public PullRequestReview withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("submitted_at")
    public OffsetDateTime submittedAt;
    public PullRequestReview withSubmittedAt(OffsetDateTime submittedAt) {
        this.submittedAt = submittedAt;
        return this;
    }
    @JsonProperty("user")
    public PullRequestReviewSimpleUser user;
    public PullRequestReview withUser(PullRequestReviewSimpleUser user) {
        this.user = user;
        return this;
    }
}