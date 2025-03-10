/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ConnectionProfileInput {
    /**
     * Required. Display name.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;

    public ConnectionProfileInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    
    /**
     * Forward SSH Tunnel connectivity.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forwardSshConnectivity")
    public ForwardSshTunnelConnectivity forwardSshConnectivity;

    public ConnectionProfileInput withForwardSshConnectivity(ForwardSshTunnelConnectivity forwardSshConnectivity) {
        this.forwardSshConnectivity = forwardSshConnectivity;
        return this;
    }
    
    /**
     * Cloud Storage bucket profile.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gcsProfile")
    public GcsProfile gcsProfile;

    public ConnectionProfileInput withGcsProfile(GcsProfile gcsProfile) {
        this.gcsProfile = gcsProfile;
        return this;
    }
    
    /**
     * Labels.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;

    public ConnectionProfileInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    
    /**
     * MySQL database profile.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mysqlProfile")
    public MysqlProfileInput mysqlProfile;

    public ConnectionProfileInput withMysqlProfile(MysqlProfileInput mysqlProfile) {
        this.mysqlProfile = mysqlProfile;
        return this;
    }
    
    /**
     * No connectivity settings.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("noConnectivity")
    public java.util.Map<String, Object> noConnectivity;

    public ConnectionProfileInput withNoConnectivity(java.util.Map<String, Object> noConnectivity) {
        this.noConnectivity = noConnectivity;
        return this;
    }
    
    /**
     * Oracle database profile.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oracleProfile")
    public OracleProfile oracleProfile;

    public ConnectionProfileInput withOracleProfile(OracleProfile oracleProfile) {
        this.oracleProfile = oracleProfile;
        return this;
    }
    
    /**
     * Private Connectivity
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateConnectivity")
    public PrivateConnectivity privateConnectivity;

    public ConnectionProfileInput withPrivateConnectivity(PrivateConnectivity privateConnectivity) {
        this.privateConnectivity = privateConnectivity;
        return this;
    }
    
    /**
     * Static IP address connectivity.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("staticServiceIpConnectivity")
    public java.util.Map<String, Object> staticServiceIpConnectivity;

    public ConnectionProfileInput withStaticServiceIpConnectivity(java.util.Map<String, Object> staticServiceIpConnectivity) {
        this.staticServiceIpConnectivity = staticServiceIpConnectivity;
        return this;
    }
    
    public ConnectionProfileInput(){}
}
