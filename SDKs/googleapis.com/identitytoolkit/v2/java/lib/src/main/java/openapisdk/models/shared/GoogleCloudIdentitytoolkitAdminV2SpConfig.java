package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2SpConfig
 * The SAML SP (Service Provider) configuration when the project acts as the relying party to receive and accept an authentication assertion issued by a SAML identity provider.
**/
public class GoogleCloudIdentitytoolkitAdminV2SpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callbackUri")
    public String callbackUri;
    public GoogleCloudIdentitytoolkitAdminV2SpConfig withCallbackUri(String callbackUri) {
        this.callbackUri = callbackUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spCertificates")
    public GoogleCloudIdentitytoolkitAdminV2SpCertificate[] spCertificates;
    public GoogleCloudIdentitytoolkitAdminV2SpConfig withSpCertificates(GoogleCloudIdentitytoolkitAdminV2SpCertificate[] spCertificates) {
        this.spCertificates = spCertificates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spEntityId")
    public String spEntityId;
    public GoogleCloudIdentitytoolkitAdminV2SpConfig withSpEntityId(String spEntityId) {
        this.spEntityId = spEntityId;
        return this;
    }
}