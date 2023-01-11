package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

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
}