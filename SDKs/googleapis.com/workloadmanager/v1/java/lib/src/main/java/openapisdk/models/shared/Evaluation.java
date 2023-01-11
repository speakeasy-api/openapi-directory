package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Evaluation
 * Message describing Evaluation object
**/
public class Evaluation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public Evaluation withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Evaluation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Evaluation withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Evaluation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceFilter")
    public ResourceFilter resourceFilter;
    public Evaluation withResourceFilter(ResourceFilter resourceFilter) {
        this.resourceFilter = resourceFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceStatus")
    public ResourceStatus resourceStatus;
    public Evaluation withResourceStatus(ResourceStatus resourceStatus) {
        this.resourceStatus = resourceStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleNames")
    public String[] ruleNames;
    public Evaluation withRuleNames(String[] ruleNames) {
        this.ruleNames = ruleNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleVersions")
    public String[] ruleVersions;
    public Evaluation withRuleVersions(String[] ruleVersions) {
        this.ruleVersions = ruleVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public Evaluation withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}