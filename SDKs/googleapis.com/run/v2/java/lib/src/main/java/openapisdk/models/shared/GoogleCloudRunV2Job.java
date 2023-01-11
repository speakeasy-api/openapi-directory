package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Job
 * Job represents the configuration of a single job, which references a container image that is run to completion.
**/
public class GoogleCloudRunV2Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2Job withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryAuthorization")
    public GoogleCloudRunV2BinaryAuthorization binaryAuthorization;
    public GoogleCloudRunV2Job withBinaryAuthorization(GoogleCloudRunV2BinaryAuthorization binaryAuthorization) {
        this.binaryAuthorization = binaryAuthorization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public GoogleCloudRunV2Job withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientVersion")
    public String clientVersion;
    public GoogleCloudRunV2Job withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV2Condition[] conditions;
    public GoogleCloudRunV2Job withConditions(GoogleCloudRunV2Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRunV2Job withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public GoogleCloudRunV2Job withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public GoogleCloudRunV2Job withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRunV2Job withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionCount")
    public Integer executionCount;
    public GoogleCloudRunV2Job withExecutionCount(Integer executionCount) {
        this.executionCount = executionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudRunV2Job withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public GoogleCloudRunV2Job withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2Job withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifier")
    public String lastModifier;
    public GoogleCloudRunV2Job withLastModifier(String lastModifier) {
        this.lastModifier = lastModifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCreatedExecution")
    public GoogleCloudRunV2ExecutionReference latestCreatedExecution;
    public GoogleCloudRunV2Job withLatestCreatedExecution(GoogleCloudRunV2ExecutionReference latestCreatedExecution) {
        this.latestCreatedExecution = latestCreatedExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public GoogleCloudRunV2JobLaunchStageEnum launchStage;
    public GoogleCloudRunV2Job withLaunchStage(GoogleCloudRunV2JobLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2Job withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public String observedGeneration;
    public GoogleCloudRunV2Job withObservedGeneration(String observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciling")
    public Boolean reconciling;
    public GoogleCloudRunV2Job withReconciling(Boolean reconciling) {
        this.reconciling = reconciling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public GoogleCloudRunV2ExecutionTemplate template;
    public GoogleCloudRunV2Job withTemplate(GoogleCloudRunV2ExecutionTemplate template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminalCondition")
    public GoogleCloudRunV2Condition terminalCondition;
    public GoogleCloudRunV2Job withTerminalCondition(GoogleCloudRunV2Condition terminalCondition) {
        this.terminalCondition = terminalCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public GoogleCloudRunV2Job withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudRunV2Job withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}