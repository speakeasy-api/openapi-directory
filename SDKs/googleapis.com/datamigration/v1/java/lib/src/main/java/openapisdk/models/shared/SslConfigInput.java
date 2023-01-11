package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslConfigInput
 * SSL configuration information.
**/
public class SslConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificate")
    public String caCertificate;
    public SslConfigInput withCaCertificate(String caCertificate) {
        this.caCertificate = caCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public String clientCertificate;
    public SslConfigInput withClientCertificate(String clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public String clientKey;
    public SslConfigInput withClientKey(String clientKey) {
        this.clientKey = clientKey;
        return this;
    }
}