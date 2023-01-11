package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateServiceAccountKeyRequest
 * The service account key create request.
**/
public class CreateServiceAccountKeyRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlgorithm")
    public CreateServiceAccountKeyRequestKeyAlgorithmEnum keyAlgorithm;
    public CreateServiceAccountKeyRequest withKeyAlgorithm(CreateServiceAccountKeyRequestKeyAlgorithmEnum keyAlgorithm) {
        this.keyAlgorithm = keyAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateKeyType")
    public CreateServiceAccountKeyRequestPrivateKeyTypeEnum privateKeyType;
    public CreateServiceAccountKeyRequest withPrivateKeyType(CreateServiceAccountKeyRequestPrivateKeyTypeEnum privateKeyType) {
        this.privateKeyType = privateKeyType;
        return this;
    }
}