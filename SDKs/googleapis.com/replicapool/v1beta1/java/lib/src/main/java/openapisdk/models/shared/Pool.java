package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Pool {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRestart")
    public Boolean autoRestart;
    public Pool withAutoRestart(Boolean autoRestart) {
        this.autoRestart = autoRestart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("baseInstanceName")
    public String baseInstanceName;
    public Pool withBaseInstanceName(String baseInstanceName) {
        this.baseInstanceName = baseInstanceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentNumReplicas")
    public Integer currentNumReplicas;
    public Pool withCurrentNumReplicas(Integer currentNumReplicas) {
        this.currentNumReplicas = currentNumReplicas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Pool withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthChecks")
    public HealthCheck[] healthChecks;
    public Pool withHealthChecks(HealthCheck[] healthChecks) {
        this.healthChecks = healthChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialNumReplicas")
    public Integer initialNumReplicas;
    public Pool withInitialNumReplicas(Integer initialNumReplicas) {
        this.initialNumReplicas = initialNumReplicas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public Label[] labels;
    public Pool withLabels(Label[] labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Pool withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numReplicas")
    public Integer numReplicas;
    public Pool withNumReplicas(Integer numReplicas) {
        this.numReplicas = numReplicas;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceViews")
    public String[] resourceViews;
    public Pool withResourceViews(String[] resourceViews) {
        this.resourceViews = resourceViews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;
    public Pool withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPool")
    public String targetPool;
    public Pool withTargetPool(String targetPool) {
        this.targetPool = targetPool;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPools")
    public String[] targetPools;
    public Pool withTargetPools(String[] targetPools) {
        this.targetPools = targetPools;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public Template template;
    public Pool withTemplate(Template template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public Pool withType(String type) {
        this.type = type;
        return this;
    }
}