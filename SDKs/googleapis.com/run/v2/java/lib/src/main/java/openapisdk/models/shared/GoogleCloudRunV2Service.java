package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2Service
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
public class GoogleCloudRunV2Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2Service withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryAuthorization")
    public GoogleCloudRunV2BinaryAuthorization binaryAuthorization;
    public GoogleCloudRunV2Service withBinaryAuthorization(GoogleCloudRunV2BinaryAuthorization binaryAuthorization) {
        this.binaryAuthorization = binaryAuthorization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public GoogleCloudRunV2Service withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientVersion")
    public String clientVersion;
    public GoogleCloudRunV2Service withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public GoogleCloudRunV2Condition[] conditions;
    public GoogleCloudRunV2Service withConditions(GoogleCloudRunV2Condition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public GoogleCloudRunV2Service withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creator")
    public String creator;
    public GoogleCloudRunV2Service withCreator(String creator) {
        this.creator = creator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleteTime")
    public String deleteTime;
    public GoogleCloudRunV2Service withDeleteTime(String deleteTime) {
        this.deleteTime = deleteTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudRunV2Service withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;
    public GoogleCloudRunV2Service withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GoogleCloudRunV2Service withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generation")
    public String generation;
    public GoogleCloudRunV2Service withGeneration(String generation) {
        this.generation = generation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingress")
    public GoogleCloudRunV2ServiceIngressEnum ingress;
    public GoogleCloudRunV2Service withIngress(GoogleCloudRunV2ServiceIngressEnum ingress) {
        this.ingress = ingress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2Service withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastModifier")
    public String lastModifier;
    public GoogleCloudRunV2Service withLastModifier(String lastModifier) {
        this.lastModifier = lastModifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCreatedRevision")
    public String latestCreatedRevision;
    public GoogleCloudRunV2Service withLatestCreatedRevision(String latestCreatedRevision) {
        this.latestCreatedRevision = latestCreatedRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestReadyRevision")
    public String latestReadyRevision;
    public GoogleCloudRunV2Service withLatestReadyRevision(String latestReadyRevision) {
        this.latestReadyRevision = latestReadyRevision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public GoogleCloudRunV2ServiceLaunchStageEnum launchStage;
    public GoogleCloudRunV2Service withLaunchStage(GoogleCloudRunV2ServiceLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2Service withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("observedGeneration")
    public String observedGeneration;
    public GoogleCloudRunV2Service withObservedGeneration(String observedGeneration) {
        this.observedGeneration = observedGeneration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reconciling")
    public Boolean reconciling;
    public GoogleCloudRunV2Service withReconciling(Boolean reconciling) {
        this.reconciling = reconciling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public GoogleCloudRunV2RevisionTemplate template;
    public GoogleCloudRunV2Service withTemplate(GoogleCloudRunV2RevisionTemplate template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminalCondition")
    public GoogleCloudRunV2Condition terminalCondition;
    public GoogleCloudRunV2Service withTerminalCondition(GoogleCloudRunV2Condition terminalCondition) {
        this.terminalCondition = terminalCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public GoogleCloudRunV2TrafficTarget[] traffic;
    public GoogleCloudRunV2Service withTraffic(GoogleCloudRunV2TrafficTarget[] traffic) {
        this.traffic = traffic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficStatuses")
    public GoogleCloudRunV2TrafficTargetStatus[] trafficStatuses;
    public GoogleCloudRunV2Service withTrafficStatuses(GoogleCloudRunV2TrafficTargetStatus[] trafficStatuses) {
        this.trafficStatuses = trafficStatuses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public GoogleCloudRunV2Service withUid(String uid) {
        this.uid = uid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudRunV2Service withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public GoogleCloudRunV2Service withUri(String uri) {
        this.uri = uri;
        return this;
    }
}