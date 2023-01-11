package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlSslConfig
 * MySQL SSL configuration information.
**/
public class MysqlSslConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificate")
    public String caCertificate;
    public MysqlSslConfig withCaCertificate(String caCertificate) {
        this.caCertificate = caCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificateSet")
    public Boolean caCertificateSet;
    public MysqlSslConfig withCaCertificateSet(Boolean caCertificateSet) {
        this.caCertificateSet = caCertificateSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public String clientCertificate;
    public MysqlSslConfig withClientCertificate(String clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificateSet")
    public Boolean clientCertificateSet;
    public MysqlSslConfig withClientCertificateSet(Boolean clientCertificateSet) {
        this.clientCertificateSet = clientCertificateSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public String clientKey;
    public MysqlSslConfig withClientKey(String clientKey) {
        this.clientKey = clientKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKeySet")
    public Boolean clientKeySet;
    public MysqlSslConfig withClientKeySet(Boolean clientKeySet) {
        this.clientKeySet = clientKeySet;
        return this;
    }
}