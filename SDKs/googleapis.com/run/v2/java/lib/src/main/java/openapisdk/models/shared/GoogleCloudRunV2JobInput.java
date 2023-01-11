package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2JobInput
 * Job represents the configuration of a single job, which references a container image that is run to completion.
**/
public class GoogleCloudRunV2JobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2JobInput withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("binaryAuthorization")
    public GoogleCloudRunV2BinaryAuthorization binaryAuthorization;
    public GoogleCloudRunV2JobInput withBinaryAuthorization(GoogleCloudRunV2BinaryAuthorization binaryAuthorization) {
        this.binaryAuthorization = binaryAuthorization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public String client;
    public GoogleCloudRunV2JobInput withClient(String client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientVersion")
    public String clientVersion;
    public GoogleCloudRunV2JobInput withClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2JobInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestCreatedExecution")
    public GoogleCloudRunV2ExecutionReference latestCreatedExecution;
    public GoogleCloudRunV2JobInput withLatestCreatedExecution(GoogleCloudRunV2ExecutionReference latestCreatedExecution) {
        this.latestCreatedExecution = latestCreatedExecution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStage")
    public GoogleCloudRunV2JobLaunchStageEnum launchStage;
    public GoogleCloudRunV2JobInput withLaunchStage(GoogleCloudRunV2JobLaunchStageEnum launchStage) {
        this.launchStage = launchStage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudRunV2JobInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template")
    public GoogleCloudRunV2ExecutionTemplate template;
    public GoogleCloudRunV2JobInput withTemplate(GoogleCloudRunV2ExecutionTemplate template) {
        this.template = template;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminalCondition")
    public GoogleCloudRunV2Condition terminalCondition;
    public GoogleCloudRunV2JobInput withTerminalCondition(GoogleCloudRunV2Condition terminalCondition) {
        this.terminalCondition = terminalCondition;
        return this;
    }
}