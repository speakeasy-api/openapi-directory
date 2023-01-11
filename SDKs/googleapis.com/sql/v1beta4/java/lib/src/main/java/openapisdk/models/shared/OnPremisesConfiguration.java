package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnPremisesConfiguration
 * On-premises instance configuration.
**/
public class OnPremisesConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caCertificate")
    public String caCertificate;
    public OnPremisesConfiguration withCaCertificate(String caCertificate) {
        this.caCertificate = caCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public String clientCertificate;
    public OnPremisesConfiguration withClientCertificate(String clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientKey")
    public String clientKey;
    public OnPremisesConfiguration withClientKey(String clientKey) {
        this.clientKey = clientKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dumpFilePath")
    public String dumpFilePath;
    public OnPremisesConfiguration withDumpFilePath(String dumpFilePath) {
        this.dumpFilePath = dumpFilePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostPort")
    public String hostPort;
    public OnPremisesConfiguration withHostPort(String hostPort) {
        this.hostPort = hostPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public OnPremisesConfiguration withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public OnPremisesConfiguration withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceInstance")
    public InstanceReference sourceInstance;
    public OnPremisesConfiguration withSourceInstance(InstanceReference sourceInstance) {
        this.sourceInstance = sourceInstance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public OnPremisesConfiguration withUsername(String username) {
        this.username = username;
        return this;
    }
}