package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlSslConfigInput
 * MySQL SSL configuration information.
**/
public class MysqlSslConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificate")
    public String caCertificate;
    public MysqlSslConfigInput withCaCertificate(String caCertificate) {
        this.caCertificate = caCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public String clientCertificate;
    public MysqlSslConfigInput withClientCertificate(String clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public String clientKey;
    public MysqlSslConfigInput withClientKey(String clientKey) {
        this.clientKey = clientKey;
        return this;
    }
}