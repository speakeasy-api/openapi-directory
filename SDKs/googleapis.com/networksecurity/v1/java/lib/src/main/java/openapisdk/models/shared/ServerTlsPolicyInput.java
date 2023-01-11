package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerTlsPolicyInput
 * ServerTlsPolicy is a resource that specifies how a server should authenticate incoming requests. This resource itself does not affect configuration unless it is attached to a target HTTPS proxy or endpoint config selector resource.
**/
public class ServerTlsPolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowOpen")
    public Boolean allowOpen;
    public ServerTlsPolicyInput withAllowOpen(Boolean allowOpen) {
        this.allowOpen = allowOpen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ServerTlsPolicyInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ServerTlsPolicyInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mtlsPolicy")
    public MtlsPolicy mtlsPolicy;
    public ServerTlsPolicyInput withMtlsPolicy(MtlsPolicy mtlsPolicy) {
        this.mtlsPolicy = mtlsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ServerTlsPolicyInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificate")
    public GoogleCloudNetworksecurityV1CertificateProvider serverCertificate;
    public ServerTlsPolicyInput withServerCertificate(GoogleCloudNetworksecurityV1CertificateProvider serverCertificate) {
        this.serverCertificate = serverCertificate;
        return this;
    }
}