package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2RevisionTemplate
 * RevisionTemplate describes the data a revision should have when created from a template.
**/
public class GoogleCloudRunV2RevisionTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotations")
    public java.util.Map<String, String> annotations;
    public GoogleCloudRunV2RevisionTemplate withAnnotations(java.util.Map<String, String> annotations) {
        this.annotations = annotations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public GoogleCloudRunV2Container[] containers;
    public GoogleCloudRunV2RevisionTemplate withContainers(GoogleCloudRunV2Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public String encryptionKey;
    public GoogleCloudRunV2RevisionTemplate withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionEnvironment")
    public GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum executionEnvironment;
    public GoogleCloudRunV2RevisionTemplate withExecutionEnvironment(GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum executionEnvironment) {
        this.executionEnvironment = executionEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public GoogleCloudRunV2RevisionTemplate withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstanceRequestConcurrency")
    public Integer maxInstanceRequestConcurrency;
    public GoogleCloudRunV2RevisionTemplate withMaxInstanceRequestConcurrency(Integer maxInstanceRequestConcurrency) {
        this.maxInstanceRequestConcurrency = maxInstanceRequestConcurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public String revision;
    public GoogleCloudRunV2RevisionTemplate withRevision(String revision) {
        this.revision = revision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaling")
    public GoogleCloudRunV2RevisionScaling scaling;
    public GoogleCloudRunV2RevisionTemplate withScaling(GoogleCloudRunV2RevisionScaling scaling) {
        this.scaling = scaling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public GoogleCloudRunV2RevisionTemplate withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public GoogleCloudRunV2RevisionTemplate withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public GoogleCloudRunV2Volume[] volumes;
    public GoogleCloudRunV2RevisionTemplate withVolumes(GoogleCloudRunV2Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcAccess")
    public GoogleCloudRunV2VpcAccess vpcAccess;
    public GoogleCloudRunV2RevisionTemplate withVpcAccess(GoogleCloudRunV2VpcAccess vpcAccess) {
        this.vpcAccess = vpcAccess;
        return this;
    }
}