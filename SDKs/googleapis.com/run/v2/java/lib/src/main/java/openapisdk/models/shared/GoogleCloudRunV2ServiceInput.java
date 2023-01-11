package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2ServiceInput
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
public class GoogleCloudRunV2ServiceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2ServiceInput withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryAuthorization")
    public GoogleCloudRunV2BinaryAuthorization binaryAuthorization;
    public GoogleCloudRunV2ServiceInput withBinaryAuthorization(GoogleCloudRunV2BinaryAuthorization binaryAuthorization) {
        this.binaryAuthorization = binaryAuthorization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public GoogleCloudRunV2ServiceInput withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientVersion")
    public String clientVersion;
    public GoogleCloudRunV2ServiceInput withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudRunV2ServiceInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ingress")
    public GoogleCloudRunV2ServiceIngressEnum ingress;
    public GoogleCloudRunV2ServiceInput withIngress(GoogleCloudRunV2ServiceIngressEnum ingress) {
        this.ingress = ingress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2ServiceInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public GoogleCloudRunV2ServiceLaunchStageEnum launchStage;
    public GoogleCloudRunV2ServiceInput withLaunchStage(GoogleCloudRunV2ServiceLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2ServiceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public GoogleCloudRunV2RevisionTemplate template;
    public GoogleCloudRunV2ServiceInput withTemplate(GoogleCloudRunV2RevisionTemplate template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminalCondition")
    public GoogleCloudRunV2Condition terminalCondition;
    public GoogleCloudRunV2ServiceInput withTerminalCondition(GoogleCloudRunV2Condition terminalCondition) {
        this.terminalCondition = terminalCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("traffic")
    public GoogleCloudRunV2TrafficTarget[] traffic;
    public GoogleCloudRunV2ServiceInput withTraffic(GoogleCloudRunV2TrafficTarget[] traffic) {
        this.traffic = traffic;
        return this;
    }
}