package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscoverConnectionProfileResponse
 * Response from a discover request.
**/
public class DiscoverConnectionProfileResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlRdbms")
    public MysqlRdbms mysqlRdbms;
    public DiscoverConnectionProfileResponse withMysqlRdbms(MysqlRdbms mysqlRdbms) {
        this.mysqlRdbms = mysqlRdbms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleRdbms")
    public OracleRdbms oracleRdbms;
    public DiscoverConnectionProfileResponse withOracleRdbms(OracleRdbms oracleRdbms) {
        this.oracleRdbms = oracleRdbms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlRdbms")
    public PostgresqlRdbms postgresqlRdbms;
    public DiscoverConnectionProfileResponse withPostgresqlRdbms(PostgresqlRdbms postgresqlRdbms) {
        this.postgresqlRdbms = postgresqlRdbms;
        return this;
    }
}