package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostgreSqlConnectionProfile
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
public class PostgreSqlConnectionProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlId")
    public String cloudSqlId;
    public PostgreSqlConnectionProfile withCloudSqlId(String cloudSqlId) {
        this.cloudSqlId = cloudSqlId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public PostgreSqlConnectionProfile withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkArchitecture")
    public PostgreSqlConnectionProfileNetworkArchitectureEnum networkArchitecture;
    public PostgreSqlConnectionProfile withNetworkArchitecture(PostgreSqlConnectionProfileNetworkArchitectureEnum networkArchitecture) {
        this.networkArchitecture = networkArchitecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public PostgreSqlConnectionProfile withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordSet")
    public Boolean passwordSet;
    public PostgreSqlConnectionProfile withPasswordSet(Boolean passwordSet) {
        this.passwordSet = passwordSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public PostgreSqlConnectionProfile withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public SslConfig ssl;
    public PostgreSqlConnectionProfile withSsl(SslConfig ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public PostgreSqlConnectionProfile withUsername(String username) {
        this.username = username;
        return this;
    }
}