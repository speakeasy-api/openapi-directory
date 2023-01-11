package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication
 * The current setting for certificate verification.
**/
public class UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRootCaCertificate")
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate clientRootCaCertificate;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication withClientRootCaCertificate(UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthenticationClientRootCaCertificate clientRootCaCertificate) {
        this.clientRootCaCertificate = clientRootCaCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ocspResponderUrl")
    public String ocspResponderUrl;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication withOcspResponderUrl(String ocspResponderUrl) {
        this.ocspResponderUrl = ocspResponderUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useLdap")
    public Boolean useLdap;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication withUseLdap(Boolean useLdap) {
        this.useLdap = useLdap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("useOcsp")
    public Boolean useOcsp;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication withUseOcsp(Boolean useOcsp) {
        this.useOcsp = useOcsp;
        return this;
    }
}