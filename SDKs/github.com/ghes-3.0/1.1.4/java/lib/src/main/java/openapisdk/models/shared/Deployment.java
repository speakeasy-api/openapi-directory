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
 * Deployment
 * A request for a specific ref(branch,sha,tag) to be deployed
**/
public class Deployment {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Deployment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("creator")
    public DeploymentSimpleUser creator;
    public Deployment withCreator(DeploymentSimpleUser creator) {
        this.creator = creator;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Deployment withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("environment")
    public String environment;
    public Deployment withEnvironment(String environment) {
        this.environment = environment;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public Deployment withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public Deployment withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_environment")
    public String originalEnvironment;
    public Deployment withOriginalEnvironment(String originalEnvironment) {
        this.originalEnvironment = originalEnvironment;
        return this;
    }
    @JsonProperty("payload")
    public Object payload;
    public Deployment withPayload(Object payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("performed_via_github_app")
    public java.util.Map<String, Object> performedViaGithubApp;
    public Deployment withPerformedViaGithubApp(java.util.Map<String, Object> performedViaGithubApp) {
        this.performedViaGithubApp = performedViaGithubApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("production_environment")
    public Boolean productionEnvironment;
    public Deployment withProductionEnvironment(Boolean productionEnvironment) {
        this.productionEnvironment = productionEnvironment;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public Deployment withRef(String ref) {
        this.ref = ref;
        return this;
    }
    @JsonProperty("repository_url")
    public String repositoryUrl;
    public Deployment withRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
        return this;
    }
    @JsonProperty("sha")
    public String sha;
    public Deployment withSha(String sha) {
        this.sha = sha;
        return this;
    }
    @JsonProperty("statuses_url")
    public String statusesUrl;
    public Deployment withStatusesUrl(String statusesUrl) {
        this.statusesUrl = statusesUrl;
        return this;
    }
    @JsonProperty("task")
    public String task;
    public Deployment withTask(String task) {
        this.task = task;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transient_environment")
    public Boolean transientEnvironment;
    public Deployment withTransientEnvironment(Boolean transientEnvironment) {
        this.transientEnvironment = transientEnvironment;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Deployment withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Deployment withUrl(String url) {
        this.url = url;
        return this;
    }
}