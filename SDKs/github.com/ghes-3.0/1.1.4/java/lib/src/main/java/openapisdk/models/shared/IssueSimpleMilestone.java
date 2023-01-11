package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * IssueSimpleMilestone
 * A collection of related issues and pull requests.
**/
public class IssueSimpleMilestone {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("closed_at")
    public OffsetDateTime closedAt;
    public IssueSimpleMilestone withClosedAt(OffsetDateTime closedAt) {
        this.closedAt = closedAt;
        return this;
    }
    @JsonProperty("closed_issues")
    public Long closedIssues;
    public IssueSimpleMilestone withClosedIssues(Long closedIssues) {
        this.closedIssues = closedIssues;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public IssueSimpleMilestone withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("creator")
    public IssueSimpleMilestoneSimpleUser creator;
    public IssueSimpleMilestone withCreator(IssueSimpleMilestoneSimpleUser creator) {
        this.creator = creator;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public IssueSimpleMilestone withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("due_on")
    public OffsetDateTime dueOn;
    public IssueSimpleMilestone withDueOn(OffsetDateTime dueOn) {
        this.dueOn = dueOn;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public IssueSimpleMilestone withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public IssueSimpleMilestone withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("labels_url")
    public String labelsUrl;
    public IssueSimpleMilestone withLabelsUrl(String labelsUrl) {
        this.labelsUrl = labelsUrl;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public IssueSimpleMilestone withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public IssueSimpleMilestone withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("open_issues")
    public Long openIssues;
    public IssueSimpleMilestone withOpenIssues(Long openIssues) {
        this.openIssues = openIssues;
        return this;
    }
    @JsonProperty("state")
    public IssueSimpleMilestoneStateEnum state;
    public IssueSimpleMilestone withState(IssueSimpleMilestoneStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public IssueSimpleMilestone withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public IssueSimpleMilestone withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public IssueSimpleMilestone withUrl(String url) {
        this.url = url;
        return this;
    }
}