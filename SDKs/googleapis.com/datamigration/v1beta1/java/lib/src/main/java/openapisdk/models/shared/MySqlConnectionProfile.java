package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MySqlConnectionProfile
 * Specifies connection parameters required specifically for MySQL databases.
**/
public class MySqlConnectionProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlId")
    public String cloudSqlId;
    public MySqlConnectionProfile withCloudSqlId(String cloudSqlId) {
        this.cloudSqlId = cloudSqlId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public MySqlConnectionProfile withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public MySqlConnectionProfile withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("passwordSet")
    public Boolean passwordSet;
    public MySqlConnectionProfile withPasswordSet(Boolean passwordSet) {
        this.passwordSet = passwordSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public MySqlConnectionProfile withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public SslConfig ssl;
    public MySqlConnectionProfile withSsl(SslConfig ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public MySqlConnectionProfile withUsername(String username) {
        this.username = username;
        return this;
    }
}