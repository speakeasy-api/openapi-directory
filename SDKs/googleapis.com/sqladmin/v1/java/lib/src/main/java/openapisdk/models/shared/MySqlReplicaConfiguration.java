package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MySqlReplicaConfiguration
 * Read-replica configuration specific to MySQL databases.
**/
public class MySqlReplicaConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificate")
    public String caCertificate;
    public MySqlReplicaConfiguration withCaCertificate(String caCertificate) {
        this.caCertificate = caCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public String clientCertificate;
    public MySqlReplicaConfiguration withClientCertificate(String clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public String clientKey;
    public MySqlReplicaConfiguration withClientKey(String clientKey) {
        this.clientKey = clientKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectRetryInterval")
    public Integer connectRetryInterval;
    public MySqlReplicaConfiguration withConnectRetryInterval(Integer connectRetryInterval) {
        this.connectRetryInterval = connectRetryInterval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dumpFilePath")
    public String dumpFilePath;
    public MySqlReplicaConfiguration withDumpFilePath(String dumpFilePath) {
        this.dumpFilePath = dumpFilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public MySqlReplicaConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("masterHeartbeatPeriod")
    public String masterHeartbeatPeriod;
    public MySqlReplicaConfiguration withMasterHeartbeatPeriod(String masterHeartbeatPeriod) {
        this.masterHeartbeatPeriod = masterHeartbeatPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public MySqlReplicaConfiguration withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslCipher")
    public String sslCipher;
    public MySqlReplicaConfiguration withSslCipher(String sslCipher) {
        this.sslCipher = sslCipher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public MySqlReplicaConfiguration withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verifyServerCertificate")
    public Boolean verifyServerCertificate;
    public MySqlReplicaConfiguration withVerifyServerCertificate(Boolean verifyServerCertificate) {
        this.verifyServerCertificate = verifyServerCertificate;
        return this;
    }
}