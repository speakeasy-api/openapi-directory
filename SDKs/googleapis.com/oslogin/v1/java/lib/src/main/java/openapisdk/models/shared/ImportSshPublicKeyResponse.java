package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportSshPublicKeyResponse
 * A response message for importing an SSH public key.
**/
public class ImportSshPublicKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public ImportSshPublicKeyResponse withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginProfile")
    public LoginProfile loginProfile;
    public ImportSshPublicKeyResponse withLoginProfile(LoginProfile loginProfile) {
        this.loginProfile = loginProfile;
        return this;
    }
}