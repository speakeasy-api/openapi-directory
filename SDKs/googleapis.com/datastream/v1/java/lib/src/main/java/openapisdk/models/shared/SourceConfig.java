package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceConfig
 * The configuration of the stream source.
**/
public class SourceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlSourceConfig")
    public MysqlSourceConfig mysqlSourceConfig;
    public SourceConfig withMysqlSourceConfig(MysqlSourceConfig mysqlSourceConfig) {
        this.mysqlSourceConfig = mysqlSourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleSourceConfig")
    public OracleSourceConfig oracleSourceConfig;
    public SourceConfig withOracleSourceConfig(OracleSourceConfig oracleSourceConfig) {
        this.oracleSourceConfig = oracleSourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlSourceConfig")
    public PostgresqlSourceConfig postgresqlSourceConfig;
    public SourceConfig withPostgresqlSourceConfig(PostgresqlSourceConfig postgresqlSourceConfig) {
        this.postgresqlSourceConfig = postgresqlSourceConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceConnectionProfile")
    public String sourceConnectionProfile;
    public SourceConfig withSourceConnectionProfile(String sourceConnectionProfile) {
        this.sourceConnectionProfile = sourceConnectionProfile;
        return this;
    }
}