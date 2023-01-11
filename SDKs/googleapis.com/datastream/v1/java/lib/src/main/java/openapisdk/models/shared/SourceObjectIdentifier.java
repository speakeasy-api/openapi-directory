package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SourceObjectIdentifier
 * Represents an identifier of an object in the data source.
**/
public class SourceObjectIdentifier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlIdentifier")
    public MysqlObjectIdentifier mysqlIdentifier;
    public SourceObjectIdentifier withMysqlIdentifier(MysqlObjectIdentifier mysqlIdentifier) {
        this.mysqlIdentifier = mysqlIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleIdentifier")
    public OracleObjectIdentifier oracleIdentifier;
    public SourceObjectIdentifier withOracleIdentifier(OracleObjectIdentifier oracleIdentifier) {
        this.oracleIdentifier = oracleIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlIdentifier")
    public PostgresqlObjectIdentifier postgresqlIdentifier;
    public SourceObjectIdentifier withPostgresqlIdentifier(PostgresqlObjectIdentifier postgresqlIdentifier) {
        this.postgresqlIdentifier = postgresqlIdentifier;
        return this;
    }
}