package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MysqlProfileInput
 * MySQL database profile.
**/
public class MysqlProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public MysqlProfileInput withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public MysqlProfileInput withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public MysqlProfileInput withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslConfig")
    public MysqlSslConfigInput sslConfig;
    public MysqlProfileInput withSslConfig(MysqlSslConfigInput sslConfig) {
        this.sslConfig = sslConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public MysqlProfileInput withUsername(String username) {
        this.username = username;
        return this;
    }
}