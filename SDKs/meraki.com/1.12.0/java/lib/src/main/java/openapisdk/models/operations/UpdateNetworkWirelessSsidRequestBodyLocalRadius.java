package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidRequestBodyLocalRadius
 * The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.
**/
public class UpdateNetworkWirelessSsidRequestBodyLocalRadius {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheTimeout")
    public Long cacheTimeout;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadius withCacheTimeout(Long cacheTimeout) {
        this.cacheTimeout = cacheTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthentication")
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication certificateAuthentication;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadius withCertificateAuthentication(UpdateNetworkWirelessSsidRequestBodyLocalRadiusCertificateAuthentication certificateAuthentication) {
        this.certificateAuthentication = certificateAuthentication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordAuthentication")
    public UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication passwordAuthentication;
    public UpdateNetworkWirelessSsidRequestBodyLocalRadius withPasswordAuthentication(UpdateNetworkWirelessSsidRequestBodyLocalRadiusPasswordAuthentication passwordAuthentication) {
        this.passwordAuthentication = passwordAuthentication;
        return this;
    }
}