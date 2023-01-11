package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DiscoverConnectionProfileRequestInput
 * Request message for 'discover' ConnectionProfile request.
**/
public class DiscoverConnectionProfileRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionProfile")
    public ConnectionProfileInput connectionProfile;
    public DiscoverConnectionProfileRequestInput withConnectionProfile(ConnectionProfileInput connectionProfile) {
        this.connectionProfile = connectionProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionProfileName")
    public String connectionProfileName;
    public DiscoverConnectionProfileRequestInput withConnectionProfileName(String connectionProfileName) {
        this.connectionProfileName = connectionProfileName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullHierarchy")
    public Boolean fullHierarchy;
    public DiscoverConnectionProfileRequestInput withFullHierarchy(Boolean fullHierarchy) {
        this.fullHierarchy = fullHierarchy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hierarchyDepth")
    public Integer hierarchyDepth;
    public DiscoverConnectionProfileRequestInput withHierarchyDepth(Integer hierarchyDepth) {
        this.hierarchyDepth = hierarchyDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlRdbms")
    public MysqlRdbms mysqlRdbms;
    public DiscoverConnectionProfileRequestInput withMysqlRdbms(MysqlRdbms mysqlRdbms) {
        this.mysqlRdbms = mysqlRdbms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleRdbms")
    public OracleRdbms oracleRdbms;
    public DiscoverConnectionProfileRequestInput withOracleRdbms(OracleRdbms oracleRdbms) {
        this.oracleRdbms = oracleRdbms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlRdbms")
    public PostgresqlRdbms postgresqlRdbms;
    public DiscoverConnectionProfileRequestInput withPostgresqlRdbms(PostgresqlRdbms postgresqlRdbms) {
        this.postgresqlRdbms = postgresqlRdbms;
        return this;
    }
}