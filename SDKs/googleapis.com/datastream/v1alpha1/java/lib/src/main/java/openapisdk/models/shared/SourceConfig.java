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
    @JsonProperty("sourceConnectionProfileName")
    public String sourceConnectionProfileName;
    public SourceConfig withSourceConnectionProfileName(String sourceConnectionProfileName) {
        this.sourceConnectionProfileName = sourceConnectionProfileName;
        return this;
    }
}