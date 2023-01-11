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
    @JsonProperty("recursionDepth")
    public Integer recursionDepth;
    public DiscoverConnectionProfileRequestInput withRecursionDepth(Integer recursionDepth) {
        this.recursionDepth = recursionDepth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recursive")
    public Boolean recursive;
    public DiscoverConnectionProfileRequestInput withRecursive(Boolean recursive) {
        this.recursive = recursive;
        return this;
    }
}