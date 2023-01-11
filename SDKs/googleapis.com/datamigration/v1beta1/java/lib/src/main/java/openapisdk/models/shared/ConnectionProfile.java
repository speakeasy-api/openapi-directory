package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionProfile
 * A connection profile definition.
**/
public class ConnectionProfile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudsql")
    public CloudSqlConnectionProfile cloudsql;
    public ConnectionProfile withCloudsql(CloudSqlConnectionProfile cloudsql) {
        this.cloudsql = cloudsql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ConnectionProfile withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ConnectionProfile withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public ConnectionProfile withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ConnectionProfile withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysql")
    public MySqlConnectionProfile mysql;
    public ConnectionProfile withMysql(MySqlConnectionProfile mysql) {
        this.mysql = mysql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConnectionProfile withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public ConnectionProfileProviderEnum provider;
    public ConnectionProfile withProvider(ConnectionProfileProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ConnectionProfileStateEnum state;
    public ConnectionProfile withState(ConnectionProfileStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ConnectionProfile withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}