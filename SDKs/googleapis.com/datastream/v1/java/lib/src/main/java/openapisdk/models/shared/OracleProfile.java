package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OracleProfile
 * Oracle database profile.
**/
public class OracleProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionAttributes")
    public java.util.Map<String, String> connectionAttributes;
    public OracleProfile withConnectionAttributes(java.util.Map<String, String> connectionAttributes) {
        this.connectionAttributes = connectionAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseService")
    public String databaseService;
    public OracleProfile withDatabaseService(String databaseService) {
        this.databaseService = databaseService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostname")
    public String hostname;
    public OracleProfile withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public OracleProfile withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("port")
    public Integer port;
    public OracleProfile withPort(Integer port) {
        this.port = port;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public OracleProfile withUsername(String username) {
        this.username = username;
        return this;
    }
}