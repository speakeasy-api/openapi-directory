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
 * Job
 * Information of a job execution in a workflow run
**/
public class Job {
    @JsonProperty("check_run_url")
    public String checkRunUrl;
    public Job withCheckRunUrl(String checkRunUrl) {
        this.checkRunUrl = checkRunUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("completed_at")
    public OffsetDateTime completedAt;
    public Job withCompletedAt(OffsetDateTime completedAt) {
        this.completedAt = completedAt;
        return this;
    }
    @JsonProperty("conclusion")
    public String conclusion;
    public Job withConclusion(String conclusion) {
        this.conclusion = conclusion;
        return this;
    }
    @JsonProperty("head_sha")
    public String headSha;
    public Job withHeadSha(String headSha) {
        this.headSha = headSha;
        return this;
    }
    @JsonProperty("html_url")
    public String htmlUrl;
    public Job withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Job withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Job withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Job withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonProperty("run_id")
    public Long runId;
    public Job withRunId(Long runId) {
        this.runId = runId;
        return this;
    }
    @JsonProperty("run_url")
    public String runUrl;
    public Job withRunUrl(String runUrl) {
        this.runUrl = runUrl;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("started_at")
    public OffsetDateTime startedAt;
    public Job withStartedAt(OffsetDateTime startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonProperty("status")
    public JobStatusEnum status;
    public Job withStatus(JobStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public JobSteps[] steps;
    public Job withSteps(JobSteps[] steps) {
        this.steps = steps;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Job withUrl(String url) {
        this.url = url;
        return this;
    }
}