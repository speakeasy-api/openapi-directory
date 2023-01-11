package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2IdpConfig
 * The SAML IdP (Identity Provider) configuration when the project acts as the relying party.
**/
public class GoogleCloudIdentitytoolkitAdminV2IdpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpCertificates")
    public GoogleCloudIdentitytoolkitAdminV2IdpCertificate[] idpCertificates;
    public GoogleCloudIdentitytoolkitAdminV2IdpConfig withIdpCertificates(GoogleCloudIdentitytoolkitAdminV2IdpCertificate[] idpCertificates) {
        this.idpCertificates = idpCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idpEntityId")
    public String idpEntityId;
    public GoogleCloudIdentitytoolkitAdminV2IdpConfig withIdpEntityId(String idpEntityId) {
        this.idpEntityId = idpEntityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signRequest")
    public Boolean signRequest;
    public GoogleCloudIdentitytoolkitAdminV2IdpConfig withSignRequest(Boolean signRequest) {
        this.signRequest = signRequest;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssoUrl")
    public String ssoUrl;
    public GoogleCloudIdentitytoolkitAdminV2IdpConfig withSsoUrl(String ssoUrl) {
        this.ssoUrl = ssoUrl;
        return this;
    }
}