package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectionProfileInput
 * A set of reusable connection configurations to be used as a source or destination for a stream.
**/
public class ConnectionProfileInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigqueryProfile")
    public java.util.Map<String, Object> bigqueryProfile;
    public ConnectionProfileInput withBigqueryProfile(java.util.Map<String, Object> bigqueryProfile) {
        this.bigqueryProfile = bigqueryProfile;
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
    @JsonProperty("forwardSshConnectivity")
    public ForwardSshTunnelConnectivity forwardSshConnectivity;
    public ConnectionProfileInput withForwardSshConnectivity(ForwardSshTunnelConnectivity forwardSshConnectivity) {
        this.forwardSshConnectivity = forwardSshConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsProfile")
    public GcsProfile gcsProfile;
    public ConnectionProfileInput withGcsProfile(GcsProfile gcsProfile) {
        this.gcsProfile = gcsProfile;
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
    @JsonProperty("mysqlProfile")
    public MysqlProfileInput mysqlProfile;
    public ConnectionProfileInput withMysqlProfile(MysqlProfileInput mysqlProfile) {
        this.mysqlProfile = mysqlProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleProfile")
    public OracleProfile oracleProfile;
    public ConnectionProfileInput withOracleProfile(OracleProfile oracleProfile) {
        this.oracleProfile = oracleProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postgresqlProfile")
    public PostgresqlProfile postgresqlProfile;
    public ConnectionProfileInput withPostgresqlProfile(PostgresqlProfile postgresqlProfile) {
        this.postgresqlProfile = postgresqlProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateConnectivity")
    public PrivateConnectivity privateConnectivity;
    public ConnectionProfileInput withPrivateConnectivity(PrivateConnectivity privateConnectivity) {
        this.privateConnectivity = privateConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticServiceIpConnectivity")
    public java.util.Map<String, Object> staticServiceIpConnectivity;
    public ConnectionProfileInput withStaticServiceIpConnectivity(java.util.Map<String, Object> staticServiceIpConnectivity) {
        this.staticServiceIpConnectivity = staticServiceIpConnectivity;
        return this;
    }
}