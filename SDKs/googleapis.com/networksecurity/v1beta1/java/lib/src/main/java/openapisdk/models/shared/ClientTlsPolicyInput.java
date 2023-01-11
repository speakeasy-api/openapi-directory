package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientTlsPolicyInput
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
**/
public class ClientTlsPolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public GoogleCloudNetworksecurityV1beta1CertificateProvider clientCertificate;
    public ClientTlsPolicyInput withClientCertificate(GoogleCloudNetworksecurityV1beta1CertificateProvider clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ClientTlsPolicyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ClientTlsPolicyInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ClientTlsPolicyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverValidationCa")
    public ValidationCa[] serverValidationCa;
    public ClientTlsPolicyInput withServerValidationCa(ValidationCa[] serverValidationCa) {
        this.serverValidationCa = serverValidationCa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sni")
    public String sni;
    public ClientTlsPolicyInput withSni(String sni) {
        this.sni = sni;
        return this;
    }
}