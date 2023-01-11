package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MySqlConnectionProfileInput
 * Specifies connection parameters required specifically for MySQL databases.
**/
public class MySqlConnectionProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudSqlId")
    public String cloudSqlId;
    public MySqlConnectionProfileInput withCloudSqlId(String cloudSqlId) {
        this.cloudSqlId = cloudSqlId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host")
    public String host;
    public MySqlConnectionProfileInput withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public MySqlConnectionProfileInput withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public MySqlConnectionProfileInput withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ssl")
    public SslConfigInput ssl;
    public MySqlConnectionProfileInput withSsl(SslConfigInput ssl) {
        this.ssl = ssl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public MySqlConnectionProfileInput withUsername(String username) {
        this.username = username;
        return this;
    }
}