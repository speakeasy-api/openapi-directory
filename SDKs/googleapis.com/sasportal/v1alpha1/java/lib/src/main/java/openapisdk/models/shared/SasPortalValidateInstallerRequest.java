package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalValidateInstallerRequest
 * Request for ValidateInstaller.
**/
public class SasPortalValidateInstallerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodedSecret")
    public String encodedSecret;
    public SasPortalValidateInstallerRequest withEncodedSecret(String encodedSecret) {
        this.encodedSecret = encodedSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installerId")
    public String installerId;
    public SasPortalValidateInstallerRequest withInstallerId(String installerId) {
        this.installerId = installerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public SasPortalValidateInstallerRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}