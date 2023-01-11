package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agent_id")
    public String agentId;
    public Task withAgentId(String agentId) {
        this.agentId = agentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public Task withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Long createdAt;
    public Task withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public Task withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by_user_id")
    public String createdByUserId;
    public Task withCreatedByUserId(String createdByUserId) {
        this.createdByUserId = createdByUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cruncher_id")
    public String cruncherId;
    public Task withCruncherId(String cruncherId) {
        this.cruncherId = cruncherId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Task withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public Task withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hidden")
    public Boolean hidden;
    public Task withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Task withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Task withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization_id")
    public String organizationId;
    public Task withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("params")
    public java.util.Map<String, String> params;
    public Task withParams(java.util.Map<String, String> params) {
        this.params = params;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public String parentId;
    public Task withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recur")
    public Boolean recur;
    public Task withRecur(Boolean recur) {
        this.recur = recur;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recur_frequency")
    public String recurFrequency;
    public Task withRecurFrequency(String recurFrequency) {
        this.recurFrequency = recurFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recur_last")
    public Long recurLast;
    public Task withRecurLast(Long recurLast) {
        this.recurLast = recurLast;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recur_last_task_id")
    public String recurLastTaskId;
    public Task withRecurLastTaskId(String recurLastTaskId) {
        this.recurLastTaskId = recurLastTaskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recur_next")
    public Long recurNext;
    public Task withRecurNext(Long recurNext) {
        this.recurNext = recurNext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public Task withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public Long startTime;
    public Task withStartTime(Long startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public java.util.Map<String, Object> stats;
    public Task withStats(java.util.Map<String, Object> stats) {
        this.stats = stats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Task withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Task withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public Long updatedAt;
    public Task withUpdatedAt(Long updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}