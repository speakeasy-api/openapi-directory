package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DemoteMasterMySqlReplicaConfiguration
 * Read-replica configuration specific to MySQL databases.
**/
public class DemoteMasterMySqlReplicaConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificate")
    public String caCertificate;
    public DemoteMasterMySqlReplicaConfiguration withCaCertificate(String caCertificate) {
        this.caCertificate = caCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public String clientCertificate;
    public DemoteMasterMySqlReplicaConfiguration withClientCertificate(String clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public String clientKey;
    public DemoteMasterMySqlReplicaConfiguration withClientKey(String clientKey) {
        this.clientKey = clientKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public DemoteMasterMySqlReplicaConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public DemoteMasterMySqlReplicaConfiguration withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public DemoteMasterMySqlReplicaConfiguration withUsername(String username) {
        this.username = username;
        return this;
    }
}