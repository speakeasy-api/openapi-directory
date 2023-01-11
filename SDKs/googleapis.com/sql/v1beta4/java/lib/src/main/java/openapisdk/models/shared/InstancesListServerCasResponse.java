package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstancesListServerCasResponse
 * Instances ListServerCas response.
**/
public class InstancesListServerCasResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeVersion")
    public String activeVersion;
    public InstancesListServerCasResponse withActiveVersion(String activeVersion) {
        this.activeVersion = activeVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certs")
    public SslCert[] certs;
    public InstancesListServerCasResponse withCerts(SslCert[] certs) {
        this.certs = certs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public InstancesListServerCasResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}