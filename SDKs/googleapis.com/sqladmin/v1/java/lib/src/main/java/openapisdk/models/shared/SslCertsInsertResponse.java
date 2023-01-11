package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SslCertsInsertResponse
 * SslCert insert response.
**/
public class SslCertsInsertResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCert")
    public SslCertDetail clientCert;
    public SslCertsInsertResponse withClientCert(SslCertDetail clientCert) {
        this.clientCert = clientCert;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public SslCertsInsertResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public Operation operation;
    public SslCertsInsertResponse withOperation(Operation operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCaCert")
    public SslCert serverCaCert;
    public SslCertsInsertResponse withServerCaCert(SslCert serverCaCert) {
        this.serverCaCert = serverCaCert;
        return this;
    }
}