package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Task
 * Task represents a single run of a container to completion.
**/
public class GoogleCloudRunV2Task {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2Task withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("completionTime")
    public String completionTime;
    public GoogleCloudRunV2Task withCompletionTime(String completionTime) {
        this.completionTime = completionTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV2Condition[] conditions;
    public GoogleCloudRunV2Task withConditions(GoogleCloudRunV2Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public GoogleCloudRunV2Container[] containers;
    public GoogleCloudRunV2Task withContainers(GoogleCloudRunV2Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRunV2Task withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public GoogleCloudRunV2Task withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public String encryptionKey;
    public GoogleCloudRunV2Task withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRunV2Task withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("execution")
    public String execution;
    public GoogleCloudRunV2Task withExecution(String execution) {
        this.execution = execution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionEnvironment")
    public GoogleCloudRunV2TaskExecutionEnvironmentEnum executionEnvironment;
    public GoogleCloudRunV2Task withExecutionEnvironment(GoogleCloudRunV2TaskExecutionEnvironmentEnum executionEnvironment) {
        this.executionEnvironment = executionEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudRunV2Task withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public GoogleCloudRunV2Task withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("index")
    public Integer index;
    public GoogleCloudRunV2Task withIndex(Integer index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("job")
    public String job;
    public GoogleCloudRunV2Task withJob(String job) {
        this.job = job;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2Task withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastAttemptResult")
    public GoogleCloudRunV2TaskAttemptResult lastAttemptResult;
    public GoogleCloudRunV2Task withLastAttemptResult(GoogleCloudRunV2TaskAttemptResult lastAttemptResult) {
        this.lastAttemptResult = lastAttemptResult;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetries")
    public Integer maxRetries;
    public GoogleCloudRunV2Task withMaxRetries(Integer maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2Task withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public String observedGeneration;
    public GoogleCloudRunV2Task withObservedGeneration(String observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciling")
    public Boolean reconciling;
    public GoogleCloudRunV2Task withReconciling(Boolean reconciling) {
        this.reconciling = reconciling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("retried")
    public Integer retried;
    public GoogleCloudRunV2Task withRetried(Integer retried) {
        this.retried = retried;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public GoogleCloudRunV2Task withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startTime")
    public String startTime;
    public GoogleCloudRunV2Task withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public GoogleCloudRunV2Task withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public GoogleCloudRunV2Task withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudRunV2Task withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public GoogleCloudRunV2Volume[] volumes;
    public GoogleCloudRunV2Task withVolumes(GoogleCloudRunV2Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcAccess")
    public GoogleCloudRunV2VpcAccess vpcAccess;
    public GoogleCloudRunV2Task withVpcAccess(GoogleCloudRunV2VpcAccess vpcAccess) {
        this.vpcAccess = vpcAccess;
        return this;
    }
}