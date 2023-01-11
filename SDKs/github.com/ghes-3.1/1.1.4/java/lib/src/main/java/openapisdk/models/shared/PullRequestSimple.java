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
 * PullRequestSimple
 * Pull Request Simple
**/
public class PullRequestSimple {
    @JsonProperty("_links")
    public PullRequestSimpleLinks links;
    public PullRequestSimple withLinks(PullRequestSimpleLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_lock_reason")
    public String activeLockReason;
    public PullRequestSimple withActiveLockReason(String activeLockReason) {
        this.activeLockReason = activeLockReason;
        return this;
    }
    @JsonProperty("assignee")
    public PullRequestSimpleSimpleUser assignee;
    public PullRequestSimple withAssignee(PullRequestSimpleSimpleUser assignee) {
        this.assignee = assignee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public SimpleUser[] assignees;
    public PullRequestSimple withAssignees(SimpleUser[] assignees) {
        this.assignees = assignees;
        return this;
    }
    @JsonProperty("author_association")
    public AuthorAssociationEnum authorAssociation;
    public PullRequestSimple withAuthorAssociation(AuthorAssociationEnum authorAssociation) {
        this.authorAssociation = authorAssociation;
        return this;
    }
    @JsonProperty("auto_merge")
    public AutoMerge autoMerge;
    public PullRequestSimple withAutoMerge(AutoMerge autoMerge) {
        this.autoMerge = autoMerge;
        return this;
    }
    @JsonProperty("base")
    public PullRequestSimpleBase base;
    public PullRequestSimple withBase(PullRequestSimpleBase base) {
        this.base = base;
        return this;
    }
    @JsonProperty("body")
    public String body;
    public PullRequestSimple withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("closed_at")
    public OffsetDateTime closedAt;
    public PullRequestSimple withClosedAt(OffsetDateTime closedAt) {
        this.closedAt = closedAt;
        return this;
    }
    @JsonProperty("comments_url")
    public String commentsUrl;
    public PullRequestSimple withCommentsUrl(String commentsUrl) {
        this.commentsUrl = commentsUrl;
        return this;
    }
    @JsonProperty("commits_url")
    public String commitsUrl;
    public PullRequestSimple withCommitsUrl(String commitsUrl) {
        this.commitsUrl = commitsUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PullRequestSimple withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("diff_url")
    public String diffUrl;
    public PullRequestSimple withDiffUrl(String diffUrl) {
        this.diffUrl = diffUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("draft")
    public Boolean draft;
    public PullRequestSimple withDraft(Boolean draft) {
        this.draft = draft;
        return this;
    }
    @JsonProperty("head")
    public PullRequestSimpleHead head;
    public PullRequestSimple withHead(PullRequestSimpleHead head) {
        this.head = head;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public PullRequestSimple withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public PullRequestSimple withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("issue_url")
    public String issueUrl;
    public PullRequestSimple withIssueUrl(String issueUrl) {
        this.issueUrl = issueUrl;
        return this;
    }
    @JsonProperty("labels")
    public PullRequestSimpleLabels[] labels;
    public PullRequestSimple withLabels(PullRequestSimpleLabels[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonProperty("locked")
    public Boolean locked;
    public PullRequestSimple withLocked(Boolean locked) {
        this.locked = locked;
        return this;
    }
    @JsonProperty("merge_commit_sha")
    public String mergeCommitSha;
    public PullRequestSimple withMergeCommitSha(String mergeCommitSha) {
        this.mergeCommitSha = mergeCommitSha;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("merged_at")
    public OffsetDateTime mergedAt;
    public PullRequestSimple withMergedAt(OffsetDateTime mergedAt) {
        this.mergedAt = mergedAt;
        return this;
    }
    @JsonProperty("milestone")
    public PullRequestSimpleMilestone milestone;
    public PullRequestSimple withMilestone(PullRequestSimpleMilestone milestone) {
        this.milestone = milestone;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public PullRequestSimple withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public PullRequestSimple withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("patch_url")
    public String patchUrl;
    public PullRequestSimple withPatchUrl(String patchUrl) {
        this.patchUrl = patchUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_reviewers")
    public SimpleUser[] requestedReviewers;
    public PullRequestSimple withRequestedReviewers(SimpleUser[] requestedReviewers) {
        this.requestedReviewers = requestedReviewers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requested_teams")
    public TeamSimple[] requestedTeams;
    public PullRequestSimple withRequestedTeams(TeamSimple[] requestedTeams) {
        this.requestedTeams = requestedTeams;
        return this;
    }
    @JsonProperty("review_comment_url")
    public String reviewCommentUrl;
    public PullRequestSimple withReviewCommentUrl(String reviewCommentUrl) {
        this.reviewCommentUrl = reviewCommentUrl;
        return this;
    }
    @JsonProperty("review_comments_url")
    public String reviewCommentsUrl;
    public PullRequestSimple withReviewCommentsUrl(String reviewCommentsUrl) {
        this.reviewCommentsUrl = reviewCommentsUrl;
        return this;
    }
    @JsonProperty("state")
    public String state;
    public PullRequestSimple withState(String state) {
        this.state = state;
        return this;
    }
    @JsonProperty("statuses_url")
    public String statusesUrl;
    public PullRequestSimple withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public PullRequestSimple withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PullRequestSimple withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public PullRequestSimple withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("user")
    public PullRequestSimpleSimpleUser user;
    public PullRequestSimple withUser(PullRequestSimpleSimpleUser user) {
        this.user = user;
        return this;
    }
}