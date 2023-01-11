package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2IdpCertificate
 * The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
**/
public class GoogleCloudIdentitytoolkitAdminV2IdpCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("x509Certificate")
    public String x509Certificate;
    public GoogleCloudIdentitytoolkitAdminV2IdpCertificate withX509Certificate(String x509Certificate) {
        this.x509Certificate = x509Certificate;
        return this;
    }
}