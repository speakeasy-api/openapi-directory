package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectSettings
 * Connect settings retrieval response.
**/
public class ConnectSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendType")
    public ConnectSettingsBackendTypeEnum backendType;
    public ConnectSettings withBackendType(ConnectSettingsBackendTypeEnum backendType) {
        this.backendType = backendType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databaseVersion")
    public ConnectSettingsDatabaseVersionEnum databaseVersion;
    public ConnectSettings withDatabaseVersion(ConnectSettingsDatabaseVersionEnum databaseVersion) {
        this.databaseVersion = databaseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddresses")
    public IpMapping[] ipAddresses;
    public ConnectSettings withIpAddresses(IpMapping[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ConnectSettings withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String region;
    public ConnectSettings withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCaCert")
    public SslCert serverCaCert;
    public ConnectSettings withServerCaCert(SslCert serverCaCert) {
        this.serverCaCert = serverCaCert;
        return this;
    }
}