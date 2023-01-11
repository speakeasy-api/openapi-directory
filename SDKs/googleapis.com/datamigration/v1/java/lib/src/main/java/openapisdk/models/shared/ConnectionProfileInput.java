package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionProfileInput
 * A connection profile definition.
**/
public class ConnectionProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alloydb")
    public AlloyDbConnectionProfileInput alloydb;
    public ConnectionProfileInput withAlloydb(AlloyDbConnectionProfileInput alloydb) {
        this.alloydb = alloydb;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudsql")
    public CloudSqlConnectionProfileInput cloudsql;
    public ConnectionProfileInput withCloudsql(CloudSqlConnectionProfileInput cloudsql) {
        this.cloudsql = cloudsql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ConnectionProfileInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public ConnectionProfileInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ConnectionProfileInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysql")
    public MySqlConnectionProfileInput mysql;
    public ConnectionProfileInput withMysql(MySqlConnectionProfileInput mysql) {
        this.mysql = mysql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ConnectionProfileInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresql")
    public PostgreSqlConnectionProfileInput postgresql;
    public ConnectionProfileInput withPostgresql(PostgreSqlConnectionProfileInput postgresql) {
        this.postgresql = postgresql;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("provider")
    public ConnectionProfileProviderEnum provider;
    public ConnectionProfileInput withProvider(ConnectionProfileProviderEnum provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ConnectionProfileStateEnum state;
    public ConnectionProfileInput withState(ConnectionProfileStateEnum state) {
        this.state = state;
        return this;
    }
}