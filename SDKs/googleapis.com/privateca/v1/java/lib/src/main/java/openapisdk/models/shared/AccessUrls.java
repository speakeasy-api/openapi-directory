package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccessUrls
 * URLs where a CertificateAuthority will publish content.
**/
public class AccessUrls {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificateAccessUrl")
    public String caCertificateAccessUrl;
    public AccessUrls withCaCertificateAccessUrl(String caCertificateAccessUrl) {
        this.caCertificateAccessUrl = caCertificateAccessUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("crlAccessUrls")
    public String[] crlAccessUrls;
    public AccessUrls withCrlAccessUrls(String[] crlAccessUrls) {
        this.crlAccessUrls = crlAccessUrls;
        return this;
    }
}