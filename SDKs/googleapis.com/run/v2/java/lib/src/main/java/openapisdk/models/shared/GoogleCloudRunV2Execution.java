package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Execution
 * Execution represents the configuration of a single execution. A execution an immutable resource that references a container image which is run to completion.
**/
public class GoogleCloudRunV2Execution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2Execution withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public String completionTime;
    public GoogleCloudRunV2Execution withCompletionTime(String completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV2Condition[] conditions;
    public GoogleCloudRunV2Execution withConditions(GoogleCloudRunV2Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRunV2Execution withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public GoogleCloudRunV2Execution withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRunV2Execution withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudRunV2Execution withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failedCount")
    public Integer failedCount;
    public GoogleCloudRunV2Execution withFailedCount(Integer failedCount) {
        this.failedCount = failedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public GoogleCloudRunV2Execution withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public String job;
    public GoogleCloudRunV2Execution withJob(String job) {
        this.job = job;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2Execution withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public GoogleCloudRunV2ExecutionLaunchStageEnum launchStage;
    public GoogleCloudRunV2Execution withLaunchStage(GoogleCloudRunV2ExecutionLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2Execution withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public String observedGeneration;
    public GoogleCloudRunV2Execution withObservedGeneration(String observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallelism")
    public Integer parallelism;
    public GoogleCloudRunV2Execution withParallelism(Integer parallelism) {
        this.parallelism = parallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciling")
    public Boolean reconciling;
    public GoogleCloudRunV2Execution withReconciling(Boolean reconciling) {
        this.reconciling = reconciling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningCount")
    public Integer runningCount;
    public GoogleCloudRunV2Execution withRunningCount(Integer runningCount) {
        this.runningCount = runningCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudRunV2Execution withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("succeededCount")
    public Integer succeededCount;
    public GoogleCloudRunV2Execution withSucceededCount(Integer succeededCount) {
        this.succeededCount = succeededCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCount")
    public Integer taskCount;
    public GoogleCloudRunV2Execution withTaskCount(Integer taskCount) {
        this.taskCount = taskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public GoogleCloudRunV2TaskTemplate template;
    public GoogleCloudRunV2Execution withTemplate(GoogleCloudRunV2TaskTemplate template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public GoogleCloudRunV2Execution withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudRunV2Execution withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}