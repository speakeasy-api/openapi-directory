package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientTlsPolicy
 * ClientTlsPolicy is a resource that specifies how a client should authenticate connections to backends of a service. This resource itself does not affect configuration unless it is attached to a backend service resource.
**/
public class ClientTlsPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientCertificate")
    public GoogleCloudNetworksecurityV1CertificateProvider clientCertificate;
    public ClientTlsPolicy withClientCertificate(GoogleCloudNetworksecurityV1CertificateProvider clientCertificate) {
        this.clientCertificate = clientCertificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public ClientTlsPolicy withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ClientTlsPolicy withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ClientTlsPolicy withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ClientTlsPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverValidationCa")
    public ValidationCa[] serverValidationCa;
    public ClientTlsPolicy withServerValidationCa(ValidationCa[] serverValidationCa) {
        this.serverValidationCa = serverValidationCa;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sni")
    public String sni;
    public ClientTlsPolicy withSni(String sni) {
        this.sni = sni;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public ClientTlsPolicy withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}