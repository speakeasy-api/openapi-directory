package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyVersionSpec
 * A Cloud KMS key configuration that a CertificateAuthority will use.
**/
public class KeyVersionSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public KeyVersionSpecAlgorithmEnum algorithm;
    public KeyVersionSpec withAlgorithm(KeyVersionSpecAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudKmsKeyVersion")
    public String cloudKmsKeyVersion;
    public KeyVersionSpec withCloudKmsKeyVersion(String cloudKmsKeyVersion) {
        this.cloudKmsKeyVersion = cloudKmsKeyVersion;
        return this;
    }
}