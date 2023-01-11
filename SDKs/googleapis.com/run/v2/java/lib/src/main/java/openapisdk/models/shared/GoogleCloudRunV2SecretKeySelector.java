package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRunV2SecretKeySelector
 * SecretEnvVarSource represents a source for the value of an EnvVar.
**/
public class GoogleCloudRunV2SecretKeySelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public GoogleCloudRunV2SecretKeySelector withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public GoogleCloudRunV2SecretKeySelector withVersion(String version) {
        this.version = version;
        return this;
    }
}