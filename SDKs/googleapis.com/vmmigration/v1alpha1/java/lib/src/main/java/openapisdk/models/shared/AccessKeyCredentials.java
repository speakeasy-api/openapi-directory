package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessKeyCredentials
 * Message describing AWS Credentials using access key id and secret.
**/
public class AccessKeyCredentials {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeyId")
    public String accessKeyId;
    public AccessKeyCredentials withAccessKeyId(String accessKeyId) {
        this.accessKeyId = accessKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secretAccessKey")
    public String secretAccessKey;
    public AccessKeyCredentials withSecretAccessKey(String secretAccessKey) {
        this.secretAccessKey = secretAccessKey;
        return this;
    }
}