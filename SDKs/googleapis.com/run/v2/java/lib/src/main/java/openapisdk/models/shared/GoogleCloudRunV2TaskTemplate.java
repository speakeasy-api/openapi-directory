package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2TaskTemplate
 * TaskTemplate describes the data a task should have when created from a template.
**/
public class GoogleCloudRunV2TaskTemplate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containers")
    public GoogleCloudRunV2Container[] containers;
    public GoogleCloudRunV2TaskTemplate withContainers(GoogleCloudRunV2Container[] containers) {
        this.containers = containers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionKey")
    public String encryptionKey;
    public GoogleCloudRunV2TaskTemplate withEncryptionKey(String encryptionKey) {
        this.encryptionKey = encryptionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionEnvironment")
    public GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum executionEnvironment;
    public GoogleCloudRunV2TaskTemplate withExecutionEnvironment(GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum executionEnvironment) {
        this.executionEnvironment = executionEnvironment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetries")
    public Integer maxRetries;
    public GoogleCloudRunV2TaskTemplate withMaxRetries(Integer maxRetries) {
        this.maxRetries = maxRetries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public String serviceAccount;
    public GoogleCloudRunV2TaskTemplate withServiceAccount(String serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeout")
    public String timeout;
    public GoogleCloudRunV2TaskTemplate withTimeout(String timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public GoogleCloudRunV2Volume[] volumes;
    public GoogleCloudRunV2TaskTemplate withVolumes(GoogleCloudRunV2Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpcAccess")
    public GoogleCloudRunV2VpcAccess vpcAccess;
    public GoogleCloudRunV2TaskTemplate withVpcAccess(GoogleCloudRunV2VpcAccess vpcAccess) {
        this.vpcAccess = vpcAccess;
        return this;
    }
}