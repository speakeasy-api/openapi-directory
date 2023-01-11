package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Revision
 * A Revision is an immutable snapshot of code and configuration. A Revision references a container image. Revisions are only created by updates to its parent Service.
**/
public class GoogleCloudRunV2Revision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2Revision withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV2Condition[] conditions;
    public GoogleCloudRunV2Revision withConditions(GoogleCloudRunV2Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public GoogleCloudRunV2Container[] containers;
    public GoogleCloudRunV2Revision withContainers(GoogleCloudRunV2Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRunV2Revision withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public GoogleCloudRunV2Revision withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public String encryptionKey;
    public GoogleCloudRunV2Revision withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRunV2Revision withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionEnvironment")
    public GoogleCloudRunV2RevisionExecutionEnvironmentEnum executionEnvironment;
    public GoogleCloudRunV2Revision withExecutionEnvironment(GoogleCloudRunV2RevisionExecutionEnvironmentEnum executionEnvironment) {
        this.executionEnvironment = executionEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudRunV2Revision withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public GoogleCloudRunV2Revision withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2Revision withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public GoogleCloudRunV2RevisionLaunchStageEnum launchStage;
    public GoogleCloudRunV2Revision withLaunchStage(GoogleCloudRunV2RevisionLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logUri")
    public String logUri;
    public GoogleCloudRunV2Revision withLogUri(String logUri) {
        this.logUri = logUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstanceRequestConcurrency")
    public Integer maxInstanceRequestConcurrency;
    public GoogleCloudRunV2Revision withMaxInstanceRequestConcurrency(Integer maxInstanceRequestConcurrency) {
        this.maxInstanceRequestConcurrency = maxInstanceRequestConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2Revision withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public String observedGeneration;
    public GoogleCloudRunV2Revision withObservedGeneration(String observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciling")
    public Boolean reconciling;
    public GoogleCloudRunV2Revision withReconciling(Boolean reconciling) {
        this.reconciling = reconciling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaling")
    public GoogleCloudRunV2RevisionScaling scaling;
    public GoogleCloudRunV2Revision withScaling(GoogleCloudRunV2RevisionScaling scaling) {
        this.scaling = scaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public GoogleCloudRunV2Revision withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public GoogleCloudRunV2Revision withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public GoogleCloudRunV2Revision withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public GoogleCloudRunV2Revision withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudRunV2Revision withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public GoogleCloudRunV2Volume[] volumes;
    public GoogleCloudRunV2Revision withVolumes(GoogleCloudRunV2Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcAccess")
    public GoogleCloudRunV2VpcAccess vpcAccess;
    public GoogleCloudRunV2Revision withVpcAccess(GoogleCloudRunV2VpcAccess vpcAccess) {
        this.vpcAccess = vpcAccess;
        return this;
    }
}