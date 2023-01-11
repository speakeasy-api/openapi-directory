package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectionProfile {
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
    @JsonProperty("forwardSshConnectivity")
    public ForwardSshTunnelConnectivity forwardSshConnectivity;
    public ConnectionProfile withForwardSshConnectivity(ForwardSshTunnelConnectivity forwardSshConnectivity) {
        this.forwardSshConnectivity = forwardSshConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsProfile")
    public GcsProfile gcsProfile;
    public ConnectionProfile withGcsProfile(GcsProfile gcsProfile) {
        this.gcsProfile = gcsProfile;
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
    @JsonProperty("mysqlProfile")
    public MysqlProfile mysqlProfile;
    public ConnectionProfile withMysqlProfile(MysqlProfile mysqlProfile) {
        this.mysqlProfile = mysqlProfile;
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
    @JsonProperty("noConnectivity")
    public java.util.Map<String, Object> noConnectivity;
    public ConnectionProfile withNoConnectivity(java.util.Map<String, Object> noConnectivity) {
        this.noConnectivity = noConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleProfile")
    public OracleProfile oracleProfile;
    public ConnectionProfile withOracleProfile(OracleProfile oracleProfile) {
        this.oracleProfile = oracleProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateConnectivity")
    public PrivateConnectivity privateConnectivity;
    public ConnectionProfile withPrivateConnectivity(PrivateConnectivity privateConnectivity) {
        this.privateConnectivity = privateConnectivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticServiceIpConnectivity")
    public java.util.Map<String, Object> staticServiceIpConnectivity;
    public ConnectionProfile withStaticServiceIpConnectivity(java.util.Map<String, Object> staticServiceIpConnectivity) {
        this.staticServiceIpConnectivity = staticServiceIpConnectivity;
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